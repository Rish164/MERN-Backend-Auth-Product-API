const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

// Add product (protected)
router.post("/", auth, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: "temp"
  });

  await product.save();
  res.send(product);
});

// Get products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;