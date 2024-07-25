const Signup = require('../models/Signup');
// const { generateToken } = require('../Utils/jwtUtils');
// const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate request body
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        const user = await Signup.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        return res.status(200).json({ success: true, message: 'User found' });

        // const isPasswordValid = await bcrypt.compare(password, user.password);

        // if (!isPasswordValid) {
        //     return res.status(401).json({ success: false, message: 'Incorrect password' });
        // }

        // const token = generateToken(user);
        // res.status(200).json({ success: true, token, data: user, message: 'LOGGED_IN' });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ success: false, error: error.message, message: 'Internal Server Error' });
    }
};
