let mongoose = require("mongoose");
mongoose.Promise = global.Promise;     // creating reference. 

let OrderSchema = mongoose.Schema({
    _id:Number,
    customerID:Number,
    productList:[{
        _id:Number,
        quantity:Number
    }],
    orderDate:Date,
    orderAmount:Number,
    orderStatus:String,
    cancelReason:String
})

let OrderModel = mongoose.model("Order",OrderSchema,"orders");

module.exports = OrderModel;