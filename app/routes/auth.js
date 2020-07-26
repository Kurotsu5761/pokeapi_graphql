const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ text: "login" });
});

router.post("/logout", (req, res) => {
  res.json({ text: "Logout" });
});

router.post("/register", (req, res) => {
  res.json({ text: "Register" });
});

router.get("/token", (req, res) => {
  res.json({ text: "Refresh Token" });
});

module.exports = router;
