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
    OrderModel.find({_id:req.params.orderID},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let getOrderByCustomerId = (req,res)=>{
    OrderModel.find({customerID:req.params.customerID},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let getOrderByProductId = (req,res)=>{
    OrderModel.find({"productList._id":req.params.productID},(err,data)=>{
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
            let nextID = (holdArr.length == 0)? 100:holdArr[holdArr.length-1]._id+1;
            let  order = new OrderModel({
                _id:nextID,
                customerID:req.body.customerID,
                orderAmount:req.body.orderAmount,
                orderDate:Date.now(),
                productList:[{_id:req.body.productId, quantity:req.body.quantity}],
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
        }else{
            res.send("Something went wrong...")
        }
    });
}

let getDailydata = (req,res)=>{

}

let getWeeklydata = (req,res)=>{

}

let getMonthlydata = (req,res)=>{

}





module.exports={getAllOrderDetails,getOrderById,storeNewOrder,getOrderByCustomerId,getDailydata,getWeeklydata,getMonthlydata,getOrderByProductId}