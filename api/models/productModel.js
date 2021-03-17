const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    price : String,
    currency : String,
    description : String,
    category :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    photo : String
})

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;