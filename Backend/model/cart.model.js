let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let CartSchema = mongoose.Schema({
    customerID:Number,
    orderNumber:String,
    productList:Array,
    orderStatus:Number,
    cancelReason:String
})

let CartModel = mongoose.model("",CartSchema,"carts");

module.exports = CartModel;