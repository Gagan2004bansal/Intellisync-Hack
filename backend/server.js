require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
})

const myRoute = require("./Routes/Route");
app.use("/", myRoute);

const dbconnect = require('./config/database');
dbconnect();
