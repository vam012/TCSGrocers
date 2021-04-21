const { json } = require("body-parser");
let SupportTicketModel = require("../model/supportticket.model.js");

let createNewSupportTicket = (req,res)=>{
    let holdArr = [];
    SupportTicketModel.find({},(err,data)=>{
        if(!err){   
            holdArr = data
        }
    });
    let nextID = (holdArr.length == 0)? 100:holdArr[holdArr.length-1]._id+1;
    let newTicket = new SupportTicketModel({
        _id:nextID,
        customerID:req.body.customerID,
        reason:req.body.reason,
        openclosed:0
    })
    newTicket.save((err,data)=>{
        if(!err){
            res.send("Successfully made ticket")
        }else{
            res.send("Something went wrong")
        }
    })
}

let updateSupportTicketStatus = (req,res)=>{
    let requestID = req.body.requestID;
    let newStatus = req.body.openclosed;
    SupportTicketModel.updateOne({_id:requestID},{$set:{openclosed:newStatus}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated ticker status")
            }else{
                res.send("Request does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let getAllTickets = (req,res)=>{
    SupportTicketModel.find({},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}

let getAllOpenTickets = (req,res)=>{
    SupportTicketModel.find({openclosed:0},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}

module.exports={createNewSupportTicket,updateSupportTicketStatus,getAllTickets,getAllOpenTickets};

