const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedQuestions = [
  {
    id: 1,
    question: "How many strings are in normal acoustic guitar?",
    answer: "5",
    keywords: ["music","pubquiz"],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    answer: "Paris",
    keywords: ["geography","pubquiz"],
  },
  {
    id: 3,
    question: "Who are you?",
    answer: "I am me",
    keywords: ["philosophy","pubquiz"],
  },
  {
    id: 4,
    question: "What",
    answer: "?",
    keywords: ["question","pubquiz"],
  }
];

async function main() {
  await prisma.questions.deleteMany();
  await prisma.keyword.deleteMany();

  for (const question of seedQuestions) {
    await prisma.questions.create({
      data: {
        question: question.question,
        answer: question.answer,
        keywords: {
          connectOrCreate: question.keywords.map((kw) => ({
            where: { name: kw },
            create: { name: kw },
          })),
        },
      },
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
