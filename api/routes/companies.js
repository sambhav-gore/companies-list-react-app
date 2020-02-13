const express = require("express");
const router = express.Router();
const { getCompanies } = require("../mocks/companies");

router.get("/", (req, res, next) => {
  res.json({ companies: getCompanies() });
});

module.exports = router;

module.exports = router;
