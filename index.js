const express = require("express");
const app = express();
const port = process.env.PORT;
const dotenv = require("dotenv").config(); // to use.env file for environment variables.
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const postRoute = require("./routers/postRoute");
const getRoute = require("./routers/getRoute");
const deleteRoute = require("./routers/deleteRoute");
const updateRoute = require("./routers/updateRoute");
connectDb();

app.all("/", (req, res) => {
    console.log("Just got a request!");
    res.send("Hello...4!");
});

app.listen(port || 3000);