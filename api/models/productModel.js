const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product's name"],
  },
  price: Number,
  currency: String,
  description: String,
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
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
