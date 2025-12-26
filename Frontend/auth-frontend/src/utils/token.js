export const decodeToken = (token) => {
  try {
    // require dinámico → NO se bundlea crypto
    const jwt = require("jsonwebtoken");
    return jwt.decode(token);
  } catch (e) {
    return null;
  }
};
