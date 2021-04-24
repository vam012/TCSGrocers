const { json } = require("body-parser");
let OrderModel = require("../model/order.model.js");



let getAllOrderDetails =(req,res)=> {
    OrderModel.find({},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}

let getOrderById = (req,res)=>{
    let oid = req.params.oid;
    OrderModel.find({_id:oid},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let getOrderByCustomerId = (req,res)=>{
    let cid = req.params.cid;
    OrderModel.find({customerId:cid},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let storeNewOrder = (req,res)=>{
    let holdArr = [];
    OrderModel.find({},(err,data)=>{
        if(!err){   
            holdArr = data
        }
    });
    let nextID = (holdArr.length == 0)? 100:holdArr[holdArr.length-1]._id+1;
    let  order = new OrderModel({
        _id:nextID,
        customerId:req.body.customerId,
        orderAmount:req.body.orderAmount,
        orderDate:req.body.orderDate,
        ProductList:[{_id:req.body.productId, quantity:req.body.quantity}],
        orderStatus:"Order Placed",
        cancelReason:""
    })
    order.save((err,result)=>{
        if(!err){
            res.send("Data store successfully")
        }else{
            res.send("Something went wrong...")
        }
    })
}




module.exports={getAllOrderDetails,getOrderById,storeNewOrder,getOrderByCustomerId}