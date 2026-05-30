

//VERIFY RECAPTCHA
async function verifyRecaptcha(req, res, next) {
  try {
    const token = req.body.recaptcha;
    if (!token) {
      return res.status(400).json({ error: "reCAPTCHA token missing" });
    }

    const secret = process.env.RECAPTCHA_SECRET;
    const googleRes = await fetch("https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      });

    const data = await googleRes.json();
    if (!data.success) { return res.status(400).json({ error: "reCAPTCHA verification failed" });}

    next();
  } catch (err) {
    console.error("reCAPTCHA error:", err );
    return res.status(500).json({ error: "reCAPTCHA server error" });
  }}

module.exports = verifyRecaptcha;
