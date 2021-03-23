const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product's name"],
  },
  price: Number,
  color: String,
  size: String,
  currency: String,
  description: String,
  productGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductGroup",
  },
  photo: String,
  variants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
