const mongoose = require("mongoose");

const express = require("express");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/mern_practical")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Middleware to parse JSON
app.use(express.json());

//Connecting auth routes
app.use("/api/auth", require("./routes/authRoutes"));

//Connecting product routes
app.use("/api/products", require("./routes/productRoutes"));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

//Basic route
app.get("/", (req, res) => {
    res.send("API Running");
});

app.post("/api/payment", (req, res) => {
  const { amount } = req.body;

  if (amount > 0) {
    res.json({ status: "success" });
  } else {
    res.status(400).json({ status: "failed" });
  }
});

//Start server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});