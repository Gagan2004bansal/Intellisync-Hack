const Signup = require('../models/Signup');

exports.signup = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);

        const user = await Signup.findOne({ email: userData.email });

        if (user !== null) {
            res.status(201).json({ success: false, message: 'Email is already in used' });
        }
        else {
            const { username, name, email, password, cpassword } = req.body;
            const newUser = new Signup({
                username,
                name,
                email,
                password: password,
                cpassword: password,
            });

            const response = await Signup.create(newUser);

            res.status(200).json({
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            });
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            data: error.message,
            message: "Error in Uploading info"
        })
    }
}