let mong = require("mongoose");
let mongoose = new mong.Mongoose();
mongoose.Promise = global.Promise;      // creating reference. 

let SupportTicketSchema = mongoose.Schema({
    _id:Number,
    customerID:Number,
    reason:String,
    openclosed:Number
})

let SupportTicketModel = mongoose.model("",SupportTicketSchema,"supporttickets");

module.exports = SupportTicketModel;