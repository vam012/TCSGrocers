let mong = require("mongoose");
let mongoose = new mong.Mongoose();
mongoose.Promise = global.Promise;      // creating reference. 

let ProductRequestSchema = mongoose.Schema({
    _id:Number,
    employeeID:Number,
    productID:Number,
    requestType:Number,
    openclosed:Number
})

let ProductRequestModel = mongoose.model("",ProductRequestSchema,"productrequests");

module.exports = ProductRequestModel;