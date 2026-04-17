const express = require("express");
const router = express.Router();
const prisma = require("../lib/prisma");
const questions = require("../data/questions");



function formatQuestions(question) {
  return {
    ...question,
    keywords: question.keywords.map((k) => k.name),
  };
}


// GET /questions
// List all questions
router.get("/", async (req, res) => {
  const { keyword } = req.query;

  const where = keyword
    ? { keywords: { some: { name: keyword } } }
    : {};

  const filteredQuestions = await prisma.questions.findMany({
    where,
    include: { keywords: true },
    orderBy: { id: "asc" },
  });

  res.json(filteredQuestions.map(formatQuestions));
});


// GET /questions/:questionId
// Show a specific post
router.get("/:questionId", async (req, res) => {
  const questionId = Number(req.params.postId);
  const question = await prisma.questions.findUnique({
    where: { id: questionId },
    include: { keywords: true },
  });

  if (!question) {
    return res.status(404).json({ 
		message: "Question not found"});
  }

  res.json(formatQuestions(question));
});



// POST /questions
// Create a new post
router.post("/", async (req, res) => {
  const { title, date, content, keywords } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ msg: 
	"quesiton and answer are mandatory" });
  }

  const keywordsArray = Array.isArray(keywords) ? keywords : [];

  const newQuestion = await prisma.questions.create({
    data: {
      question, answer,
      keywords: {
        connectOrCreate: keywordsArray.map((kw) => ({
          where: { name: kw }, create: { name: kw },
        })), },
    },
    include: { keywords: true },
  });

  res.status(201).json(formatQuestions(newQuestion));
});



// PUT /questions/:questionId
// Edit question
router.put("/:questionId", async (req, res) => {
  const questionId = Number(req.params.questionId);
  const { question, answer, keywords } = req.body;
  const existingQuestion= await prisma.questions.findUnique({ where: { id: questionId } });
  if (!existingQuestion) {
    return res.status(404).json({ message: "Question not found" });
  }

  if (!question || !answer) {
    return res.status(400).json({ msg: "question and answer are mandatory" });
  }

  const keywordsArray = Array.isArray(keywords) ? keywords : [];
  const updatedQuestion = await prisma.questions.update({
    where: { id: questionId },
    data: {
      question, answer,
      keywords: {
        set: [],
        connectOrCreate: keywordsArray.map((kw) => ({
          where: { name: kw },
          create: { name: kw },
        })),
      },
    },
    include: { keywords: true },
  });
  res.json(formatQuestions(updatedQuestion));
});


// DELETE /questions/:questionId
// Delete question
router.delete("/:quetionId", async (req, res) => {
  const questionId = Number(req.params.questionId);

  const question = await prisma.questions.findUnique({
    where: { id: questionId },
    include: { keywords: true },
  });

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  await prisma.questions.delete({ where: { id: questionId } });

  res.json({
    message: "Question deleted successfully",
    post: formatQuestions(question),
  });
});









module.exports = router;
