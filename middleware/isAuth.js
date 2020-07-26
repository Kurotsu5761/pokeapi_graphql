const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  req.isAuth = false;

  if (!authHeader) {
    return next();
  }
  const token = authHeader.split(" ")[1]; //Bearer token
  if (!token || token === "") {
    return next();
  }
  let decode;
  try {
    decode = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  } catch (err) {
    return next();
  }

  if (!decode) {
    return next();
  }

  req.isAuth = true;
  req.user = decode;
  next();
};
