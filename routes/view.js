const router = require("express").Router();
const db = require("../models");
const path = require("path");

// index
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/blah.html"));
});

module.exports = router;