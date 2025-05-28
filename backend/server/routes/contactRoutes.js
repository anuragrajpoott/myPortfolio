// server/routes/contact.js

const express = require("express");
const router = express.Router();

const { contact } = require("../controllers/auth"); // ensure correct file name

// POST /api/v1/contact
router.post("/contact", contact);

module.exports = router;
