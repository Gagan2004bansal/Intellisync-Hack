const Article = require("../models/Article");

exports.article = async (req, res) => {
    try {
        const response = req.body;
        const data = await Article.create(response);

        res.status(200).json({
            success: true,
            data: data,
            message: "Created Blog"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            data: error.message,
            message: "Not Created blog"
        });
    }
};

exports.Show = async (req, res) => {
    try {

        const response = await Article.find().sort({ time: -1 });

        res.status(200).json({
            success: true,
            data: response,
            message: "Article Fetch"
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            data: error.message,
            message: "Internal Server Error"
        });
    }
};

exports.del = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const data = await Article.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Article deleted successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};