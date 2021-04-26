let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    fName:String,
    lName:String,
    email:String,
    username:String,
    password:String
})

let EmployeeModel = mongoose.model("Employee",EmployeeSchema,"employees");

module.exports = EmployeeModel;