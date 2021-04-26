let mong = require("mongoose");
let mongoose = new mong.Mongoose();
mongoose.Promise = global.Promise;      // creating reference. 

let CartSchema = mongoose.Schema({
    _id:Number,
    productList:[{
        _id:Number,
        quantity:Number
    }],
})

let CartModel = mongoose.model("",CartSchema,"carts");

module.exports = CartModel;