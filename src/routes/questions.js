const express = require("express");
const router = express.Router();
const questions = require("../data/questions");


// GET /questions
// List all questions
router.get("/", (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.json(questions);
    } 
    const filteredQuestions = questions.filter(q => q.keywords.includes(keyword.toLowerCase()));
    res.json(filteredQuestions);
});

// GET /questions/:questionId
// Show a specific post
router.get("/:questionId", (req, res) => {
  const questionId = Number(req.params.questionId);

  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  res.json(question);
});

// POST /questions
// Create a new post
router.post("/", (req, res) => {
  const { question, answer, keywords } = req.body;

  if (!question || !answer) {
    return res.status(400).json({
      message: "question and answer are required"
    });
  }
  const maxId = Math.max(...posts.map(p => p.id), 0);

  const newQuestion = {
    id: questions.length ? maxId + 1 : 1,
    question, answer,
    keywords: Array.isArray(keywords) ? keywords : []
  };
  questions.push(newQuestion);
  res.status(201).json(newQuestion);
});

// PUT /questions/:questionId
// Edit question
router.put("/:questionId", (req, res) => {
  const questionId = Number(req.params.questionId);
  const { question, answer, keywords } = req.body;

  const questio = questions.find((p) => p.id === questionId);

  if (!questio) {
    return res.status(404).json({ message: "Question not found" });
  }

  if (!question || !answer) {
    return res.json({
      message: "question and answer are required"
    });
  }

  questio.question = question;
  questio.answer = answer;
  questio.keywords = Array.isArray(keywords) ? keywords : [];

  res.json(questio);
});

// DELETE /questions/:questionId
// Delete question
router.delete("/:questionId", (req, res) => {
  const questionId = Number(req.params.questionId);

  const questionIndex = posts.findIndex((q) => q.id === questionId);

  if (questionIndex === -1) {
    return res.status(404).json({ message: "Question not found" });
  }

  const deletedQuestion = questions.splice(questionIndex, 1);

  res.json({
    message: "Question deleted successfully",
    post: deletedQuestion[0]
  });
});








module.exports = router;
