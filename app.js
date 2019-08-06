require("dotenv").config();

const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Word = require("./models/word");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
app.use(express.static('public'));

var indexRoute = require("./routes");

app.get("/", indexRoute);


app.listen(process.env.PORT || 3000, function() {
    console.log("I am listening...");
});

/*
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("I am listening...");
});

*/