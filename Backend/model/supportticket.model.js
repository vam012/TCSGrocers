let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let SupportTicketSchema = mongoose.Schema({
    _id:Number,
    customerID:Number,
    reason:String,
    openclosed:Number
})

let SupportTicketModel = mongoose.model("SupportTicket",SupportTicketSchema,"supporttickets");

module.exports = SupportTicketModel;