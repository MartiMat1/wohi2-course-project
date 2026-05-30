const express = require("express");
const router = express.Router();
const prisma = require("../lib/prisma");
const authenticate = require("../middleware/auth");
const isOwner = require("../middleware/isOwner");
const multer = require("multer");
const path = require("path");
const { NotFoundError,ValidationError } = require("../lib/errors");
const {z} = require("zod");
const cloudinary = require("cloudinary").v2;
require("dotenv").config;
require("dotenv").config({ path: ".env.cloudinary" });

//CLOUDINARY
cloudinary.config({
  cloud_name: "dznddvcvp",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//INPUT
const questionInput = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
  keywords: z.union([z.string(), z.array(z.string())]).optional(),
});

//MULTER
const storage = multer.diskStorage({
  destination: path.join(__dirname, "..","..","public","uploads"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const newName= `${Date.now()}${Math.random().toString(36).slice(2,8)}${ext}`;
    cb(null, newName)
  }
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new ValidationError("Only image files are allowed"));
},
  limits: {fileSize: 5*1024*1024}
})

//FORMAT
function formatQuestions(question) {
  return {
    ...question,
    keywords: question.keywords.map((k) => k.name),
    userName: question.user ? question.user.name : null,
    attemptCount: question._count?.attempts ?? 0,
    attempted: question.attempts ? question.attempts.length > 0 : false,
    correct: question.attempts?.[0]?.correct ?? false,
    user: undefined,
    _count: undefined,
    attempts: undefined
  };
}

// Apply authentication to ALL routes in this router
router.use(authenticate);

// GET /questions
// List all questions
router.get("/", async (req, res) => {
  const { keyword } = req.query;

  const where = keyword
    ? { keywords: { some: { name: keyword } } }
    : {};


  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.max(1,Math.min(100, parseInt(req.query.limit) || 5));
  const skip = (page - 1) * limit;

  const [filteredQuestions, total] = await Promise.all([prisma.questions.findMany({
    where,
    include: { 
               keywords: true,
               user: true, 
               attempts: {where: {userId: req.user.userId}, take: 1},
               _count: {select: {attempts: true}}
             },
    orderBy: { id: "asc" },
    skip,
    take: limit
  }),prisma.questions.count({where})]);

  res.json({
    data: filteredQuestions.map(formatQuestions),
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit)
})
});


// GET /questions/:questionId
// Show a specific post
router.get("/:questionId", async (req, res) => {
  const questionId = Number(req.params.questionId);
  const question = await prisma.questions.findUnique({
    where: { id: questionId },
    include: { keywords: true, 
               user: true, 
               attempts: {where: {userId: req.user.userId}, take: 1},
               _count: {select: {attempts: true}}
             },
  });

  if (!question) {
    throw new NotFoundError("Question not found");
  }

  res.json(formatQuestions(question));
});

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError ||
      err?.message === "Only image files are allowed") {
    return res.status(400).json({ msg: err.message });
  }
  next(err); // pass through to global handler
});


// POST /questions
// Create a new post
router.post("/", upload.single("image"), async (req, res) => {

  const uploadImg = await cloudinary.uploader.upload(req.file.path);

  const {question, answer, keywords} = questionInput.parse(req.body);

  const keywordsArray = Array.isArray(keywords) ? keywords : [];
  //const imageUrl = req.file ? `/uploads/${req.file.filename}`: null;

  const newQuestion = await prisma.questions.create({
    data: {
      question,
      answer,
      userId: req.user.userId,
      imageUrl: uploadImg.secure_url,
      keywords: {
        connectOrCreate: keywordsArray.map((kw) => ({
          where: { name: kw }, create: { name: kw },
        })), 
      },
    },
    include: { keywords: true },
  });

  res.status(201).json(formatQuestions(newQuestion));

});

// PUT /questions/:questionId
// Edit question
router.put("/:questionId", upload.single("image"), isOwner, async (req, res) => {
  const questionId = Number(req.params.questionId);
  const {question, answer, keywords} = questionInput.parse(req.body);
  const existingQuestion= await prisma.questions.findUnique({ where: { id: questionId } });

  if (!existingQuestion) {
    throw new NotFoundError("Question not found");
  }

  if (!question || !answer) {
    throw new ValidationError("Question and answer are mandatory")
  }

  const uploadImg= await cloudinary.uploader.upload(req.file.path);

  const keywordsArray = Array.isArray(keywords) ? keywords : [];
  //const imageUrl = req.file ? `/uploads/${req.file.filename}`: null;
  const updatedQuestion = await prisma.questions.update({
    where: { id: questionId },
    data: {
      question,
      answer,
      imageUrl: uploadImg.secure_url,
      keywords: {
        set: [],
        connectOrCreate: keywordsArray.map((kw) => ({
          where: { name: kw },
          create: { name: kw },
        })),
      },
    },
    include: { keywords: true, 
               user: true },
  });
  res.json(formatQuestions(updatedQuestion));
});


// DELETE /questions/:questionId
// Delete question
router.delete("/:questionId", isOwner, async (req, res) => {
  const questionId = Number(req.params.questionId);

  const question = await prisma.questions.findUnique({
    where: { id: questionId },
    include: { keywords: true, user: true },
  });

  if (!question) {
    throw new NotFoundError("Question not found");
  }

  await prisma.attempt.deleteMany({ where: { questionsId: questionId, }});
  await prisma.questions.delete({ where: { id: questionId } });

  res.json({
    message: "Question deleted successfully",
    post: formatQuestions(question),
  });
});


//POST ATTEMPT
router.post("/:questionId/attempt", async (req, res) => {
    const questionId = Number(req.params.questionId);
    const { answer } = req.body;
    const question = await prisma.questions.findUnique({ where: { id: questionId } });

    if (!question) {
       throw new NotFoundError("Question not found");
    }

    const correct = answer === question.answer;

    const attempt = await prisma.attempt.upsert({
        where: { userId_questionsId: { userId: req.user.userId, questionsId: questionId } },
        update: {
          attemptedAt: new Date(),
          correct: correct
        },
        create: { userId: req.user.userId,
                  questionsId: questionId,
                  correct: correct,},
    });
    
    const attemptCount = await prisma.attempt.count({ where: { questionsId: questionId } });

    res.json({
        id: attempt.id,
        questionId,
        attempted: true,
        submittedAnswer: answer,
        correctAnswer: question.answer,
        correct: correct,
        attemptCount,
        attemptedAt: attempt.attemptedAt,
    });
}); 

//DELETE ATTEMPT
router.delete("/:questionId/attempt", async (req, res) => {
    const questionId = Number(req.params.questionId);

    const question = await prisma.questions.findUnique({
        where: { id: questionId },
    });

    if (!question) {
      throw new NotFoundError("Question not found");
    }

    await prisma.attempt.deleteMany({
        where: { userId: req.user.userid, 
                 questionsId: questionId,},
    });

    const attemptCount = await prisma.attempt.count({
        where: { questionsId: questionId },
    });

    res.json({
        questionId,
        attempted: false,
        correct: false,
        attemptCount,
    });
});


module.exports = router;
