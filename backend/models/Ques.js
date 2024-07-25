const mongoose = require('mongoose');

const QuesSchema = new mongoose.Schema(
    {
        problem_link: {
            type: String,
        },
        problem_name: {
            type: String,
        }
    }
);

module.exports = mongoose.model("Ques", QuesSchema);