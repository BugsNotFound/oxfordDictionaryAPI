var express = require("express"),
    Word = require("../models/word"),
    router = express.Router(),
    index = require("../controllers");

router.get("/", index.indexPage);

module.exports = router;