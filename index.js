const express = require("express");
const app = express();
const port = process.env.PORT;
const dotenv = require("dotenv").config(); // to use.env file for environment variables.
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
connectDb();

app.all("/", (req, res) => {
    console.log("Just got a request!");
    res.send("Hello...!");
});

app.listen(port || 5000);