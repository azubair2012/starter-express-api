const express = require("express");
const app = express();
const port = process.env.PORT;
app.all("/", (req, res) => {
    console.log("Just got a request!");
    res.send("Hello...!");
});
app.listen(port || 5000);