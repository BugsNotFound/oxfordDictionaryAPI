var mongoose = require("mongoose");

var dictSchema = new mongoose.Schema({
    word: String,
    lang: String,
    meaning: String
});


module.exports = mongoose.model("Word", dictSchema);