const express = require("express");

const app = express();

//Middleware to parse JSON
app.use(express.json());

//Basic route
app.get("/", (req, res) => {
    res.send("API Running");
});

//Start server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});