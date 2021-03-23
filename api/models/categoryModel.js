const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,"Please provide category's name"]
    },
    productGroups : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "ProductGroup"
    }]
})

const Category = mongoose.model("Category", categorySchema, "categories");
module.exports = Category;