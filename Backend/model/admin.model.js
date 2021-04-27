let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let AdminSchema = mongoose.Schema({
    username:String,
    password:String
})

let AdminModel = mongoose.model("Admin",AdminSchema,"admins");

module.exports = AdminModel;