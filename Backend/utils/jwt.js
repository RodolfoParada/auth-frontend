const jwt = require("jsonwebtoken");

const ACCESS_SECRET = "access_secret";
const REFRESH_SECRET = "refresh_secret";

const generateAccessToken = (user) =>
  jwt.sign(user, ACCESS_SECRET, { expiresIn: "15m" });

const generateRefreshToken = (user) =>
  jwt.sign(user, REFRESH_SECRET, { expiresIn: "7d" });

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  ACCESS_SECRET,
  REFRESH_SECRET
};
