const prisma = require("../lib/prisma");

async function isOwner (req, res, next) {
    const id = Number(req.params.questionId);
    const record = await prisma.questions.findUnique({
      where: { id },
      include: { keywords: true },
    });

    if (!record) {
      return res.status(404).json({ message: "question not found" });
    }

    if (record.userId !== req.user.userId) {
      return res.status(403).json({ error: "You can only modify your own questions" });
    }

    // Attach the record to the request so the route handler can reuse it
    req.questions = record;
    next();
  
}

module.exports = isOwner;
