let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let CartSchema = mongoose.Schema({
    _id:Number,
    productList:[{
        _id:Number,
        quantity:Number
    }],
})

let CartModel = mongoose.model("Cart",CartSchema,"carts");

module.exports = CartModel;