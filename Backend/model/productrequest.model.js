let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductRequestSchema = mongoose.Schema({
    _id:Number,
    employeeID:Number,
    productID:Number,
    requestType:Number,
    openclosed:Number
})

let ProductRequestModel = mongoose.model("ProductRequest",ProductRequestSchema,"productrequests");

module.exports = ProductRequestModel;