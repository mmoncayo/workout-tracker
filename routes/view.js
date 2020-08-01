const router = require("express").Router();
const path = require("path");

// index
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats",function(req,res){   
    res.sendFile(path.join(__dirname,"../public/blah.html"));
});

module.exports = router;