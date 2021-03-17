const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,"Please provide category's name"]
    },
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product"
    }]
})

const Category = mongoose.model("Category", categorySchema, "categories");
module.exports = Category;