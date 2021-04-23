let mong = require("mongoose");
let mongoose = new mong.Mongoose();
mongoose.Promise = global.Promise;      // creating reference. 

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    fName:String,
    lName:String,
    email:String,
    username:String,
    password:String
})

let EmployeeModel = mongoose.model("",EmployeeSchema,"employees");

module.exports = EmployeeModel;