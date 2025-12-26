const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [
  {
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN REQUEST:", email, password);

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign(
    { email: user.email },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  return res.json({
    token,
    user: { email: user.email },
  });
});

module.exports = router;
