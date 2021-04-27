const { json } = require("body-parser");
let ProductRequestModel = require("../model/productrequest.model.js");


let createNewProductRequest = (req,res)=>{
    let holdArr = [];
    ProductRequestModel.find({},(err,data)=>{
        if(!err){   
            holdArr = data;
            let nextID = (holdArr.length == 0)? 100:holdArr[holdArr.length-1]._id+1;
            let newRequest = new ProductRequestModel({
                _id:nextID,
                employeeID:req.body.empID,
                productID:req.body.prodID,
                requestType:req.body.requestType,
                openclosed:0
            })
            newRequest.save((err,data)=>{
                if(!err){
                    res.send("Successfully made request")
                }else{
                    res.send("Something went wrong")
                }
            })
        }else{
            res.send("Something went wrong...")
        }
    });
}

let updateProductRequestStatus = (req,res)=>{
    let requestID = req.body.requestID;
    let newStatus = req.body.newStatus;
    ProductRequestModel.updateOne({_id:requestID},{$set:{openclosed:newStatus}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated request status")
            }else{
                res.send("Request does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let getAllRequests = (req,res)=>{
    ProductRequestModel.find({},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}

let getAllOpenRequests = (req,res)=>{
    ProductRequestModel.find({openclosed:0},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}

let getRequestsByEmployeeID = (req,res)=>{
    let employeeID = req.body.employeeID
    ProductRequestModel.find({employeeID:employeeID},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}

module.exports={createNewProductRequest,updateProductRequestStatus,getAllRequests,getAllOpenRequests,getRequestsByEmployeeID}
