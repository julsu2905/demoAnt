const mongoose = require("mongoose");

const productGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product group's name"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const ProductGroup = mongoose.model(
  "ProductGroup",
  productGroupSchema,
  "productgroups"
);
module.exports = ProductGroup;
