let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let CustomerSchema = mongoose.Schema({
    _id:Number,
    fName:String,
    lName:String,
    email:String,
    username:String,
    password:String,
    birthday:String,
    phoneNumber:String,
    funds:Number,
    failedLoginAttempts:Number,
    locked:Number
})

let CustomerModel = mongoose.model("Customer",CustomerSchema,"customers");

module.exports = CustomerModel;