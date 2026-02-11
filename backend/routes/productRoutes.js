const express = require("express");
const router = express.Router();
const { createRequirement } = require("../controllers/productController");

router.post("/submit", createRequirement);

module.exports = router;
