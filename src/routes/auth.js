const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");
const { ValidationError, ConflictError, UnauthorizedError, ForbiddenError } = require("../lib/errors");
const verifyRecaptcha = require("../middleware/verifyRecaptcha");
const sendVerificationEmail = require("../routes/SMTP2GO");

const SECRET = process.env.JWT_SECRET || "dev-secret";

// POST 
// /api/auth/register
router.post("/register", verifyRecaptcha, async (req, res) => {
  try {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    throw new ValidationError("Email, password and name are required");
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email },});

  if (existingUser) {
    throw new ConflictError("Email already registered");
  }

  //hash
  const hashedPassword = await bcrypt.hash(password, 10);

  const verificationToken = `${Date.now()}${Math.random().toString(36).slice(2,8)}`;

  //create user
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name, verificationToken, isVerified : false, },
  });

  //generate token
  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });

  await sendVerificationEmail(email, verificationToken);

  res.status(201).json({
    message: "User registered successfully, check your email for verification!",
    token,
  });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// POST 
// /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ValidationError("Email and password are required");
  }

  //FIND USER
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new UnauthorizedError("Invalid credentials");
  }

  // Check if email is verified
  if (!user.isVerified) {
    return res.status(403).json({
      error: "Email has not been confirmed. Please check your email."
    });
  }

  //VERIFY PASSWORD
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new ForbiddenError("Invalid credentials");
  }

  // Generate a token
  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});

//GET
//VERIFY EMAIL
router.get("/verify/:token", async (req, res) => {
  const { token } = req.params;

  const user = await prisma.user.findFirst({
    where: { verificationToken: token },
  });

  if (!user) {
    return res.status(400).json({ error: "Invalid or outdated link" });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      isVerified: true,
      verificationToken: null,
    },
  });

  res.json({ message: "Email confirmed! You can now log in." });
});


module.exports = router;
