
const { resetDb, registerAndLogin, createQuestion, request, app, prisma } = require("./helpers");
beforeEach(resetDb);

describe("question tests", () => {

it("returns 401 without a token", async () => {
  const res = await request(app).get("/api/questions");
  expect(res.status).toBe(401);
});

it("returns 404 for unknown question", async () => {
  const token = await registerAndLogin();
  const res = await request(app).get("/api/questions/9999").set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(404);
  expect(res.body.message).toBe("Question not found");
});

it("returns 400 for invalid question body", async () => {
  const token = await registerAndLogin();
  const res = await request(app).post("/api/questions")
    .set("Authorization", `Bearer ${token}`)
    .send({ question: "" });
  expect(res.status).toBe(400);
});

it("returns 403 when editing someone else's question", async () => {
  const aliceToken = await registerAndLogin("alice@test.io", "Alice");
  const question = await createQuestion(aliceToken, { question: "Alice's post" });

  const bobToken = await registerAndLogin("bob@test.io", "Bob");
  const res = await request(app).put(`/api/questions/${question.id}`)
    .set("Authorization", `Bearer ${bobToken}`)
    .send({ question: "hijacked", date: "2026-01-01", answer: "x" });

  expect(res.status).toBe(403);

  const after = await prisma.questions.findUnique({ where: { id: question.id } });
  expect(after.question).toBe("Alice's post");  // unchanged
});

it("returns 200 when deleting question", async () => {
  const token = await registerAndLogin();
  const question = await createQuestion(token, {question:"x", answer:"y"});

  const res = await request(app).delete(`/api/questions/${question.id}`)
    .set("Authorization", `Bearer ${token}`)

  expect(res.status).toBe(200);

});

it("returns 200 when editing question", async () => {
  const token = await registerAndLogin();
  const question = await createQuestion(token, {question:"x", answer:"y"});

  const res = await request(app).put(`/api/questions/${question.id}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ question: "xx", answer: "yy" });

  expect(res.status).toBe(200);

});

it("returns 201 for valid question body", async () => {
  const token = await registerAndLogin();
  const res = await request(app).post("/api/questions")
    .set("Authorization", `Bearer ${token}`)
    .send({ question: "test", answer: "test" });
  expect(res.status).toBe(201);
});

it("returns 200 for correct answer attempt", async () => {
  const token = await registerAndLogin();

  const question = await createQuestion(token, {question: "test", answer: "test"});

  const res = await request(app)
    .post(`/api/questions/${question.id}/attempt`)
    .set("Authorization", `Bearer ${token}`)
    .send({ answer: "test" });

  expect(res.status).toBe(200);

});

it("returns 200 for correct answer delete", async () => {
  const token = await registerAndLogin();

  const question = await createQuestion(token, { question: "test", answer: "test"});

  const res = await request(app)
    .delete(`/api/questions/${question.id}/attempt`)
    .set("Authorization", `Bearer ${token}`);

  expect(res.status).toBe(200);
});


});