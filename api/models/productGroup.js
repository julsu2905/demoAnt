const mongoose = require('mongoose');

const productGroupSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,"Please provide category's name"]
    },
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product"
    }]
})

const ProductGroup = mongoose.model("ProductGroup", productGroupSchema, "productgroups");
module.exports = ProductGroup;