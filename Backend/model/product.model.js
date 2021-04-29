let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    name:String,
    quantity:Number,
    price:Number,
    discount:Number,
    qnt:Number
})

let ProductModel = mongoose.model("Product",ProductSchema,"products");

module.exports = ProductModel;