const Ques = require('../models/Ques');

exports.getQues = async (req, res) => {
    try {
        const { company } = req.params;
        const questions = await Ques.find({ company });
        res.status(200).json({
            success: true,
            data: questions,
            message: `Questions for company ${company} fetched successfully`,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Error in Fetching",
        });
    }
};
