let mong = require("mongoose");
let mongoose = new mong.Mongoose();
mongoose.Promise = global.Promise;      // creating reference. 

let OrderSchema = mongoose.Schema({
    customerID:Number,
    productList:[{
        _id:Number,
        quantity:Number
    }],
    orderDate:String,
    orderAmount:Number,
    orderStatus:Number,
    cancelReason:String
})

let OrderModel = mongoose.model("",OrderSchema,"orders");

module.exports = OrderModel;