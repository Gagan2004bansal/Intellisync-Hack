const express = require('express');

const router = express.Router();

// const { profile } = require("../Controller/profile");
const { signup } = require("../controllers/signup");
// const { user } = require("../Controller/user");
const { login } = require("../controllers/login");
const { article, Show, del } = require("../controllers/article");
// const { news } = require("../Controller/news");
// const { authenticationToken } = require('../Config/authMiddleware');
const { getQues } = require("../controllers/getQues");


// router.get('/profile', authenticationToken, profile);
// router.get("/profile", profile);
router.post("/signup", signup);
// router.post('/explore', user);
router.post('/', login);
router.post('/publish', article);
router.get("/publish", Show);
router.delete("article/:id", del);
// router.get("/companies", getQues);
router.get('/companies/:company', getQues);
// router.get("", news);

module.exports = router;
