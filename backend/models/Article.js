const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title1: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Articles", ArticleSchema);
