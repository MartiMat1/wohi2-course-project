const prisma = require("../lib/prisma");
const { NotFoundError,ForbiddenError } = require("../lib/errors");

async function isOwner (req, res, next) {
    const id = Number(req.params.questionId);
    const record = await prisma.questions.findUnique({
      where: { id },
      include: { keywords: true },
    });

    if (!record) {
      throw new NotFoundError("Question not found");
    }

    if (record.userId !== req.user.userId) {
      throw new ForbiddenError("You can only modify your own questions");
    }

    // Attach the record to the request so the route handler can reuse it
    req.questions = record;
    next();
  
}

module.exports = isOwner;
