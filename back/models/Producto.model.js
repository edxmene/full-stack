const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    categories: Array
});

//returning the structure of the document
module.exports = mongoose.model("Product", productSchema); 