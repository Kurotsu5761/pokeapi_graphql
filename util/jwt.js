const jwt = require("jsonwebtoken");

const generateAccessToken = (user) =>
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" });
const generateRefreshToken = (user) =>
  jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

module.exports = {
  generateAccesstoken,
  generateRefreshToken,
};
