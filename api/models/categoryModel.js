const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name : String,
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product"
    }]
})

const Category = mongoose.model("Category", productSchema, "categories");
module.exports = Category;