let mong = require("mongoose");
let mongoose = new mong.Mongoose();
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    name:String,
    quantity:Number,
    price:Number,
    discount:Number
})

let ProductModel = mongoose.model("",ProductSchema,"products");

module.exports = ProductModel;