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

let getOrderReportByCustomerId = (req,res)=>{
    OrderModel.find({customerID:req.params.cid},(err,data)=>{
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
                productList:req.body.productList,
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

let getDailyData = (req,res)=>{
    let dateString = req.params.date;
    const dateSplit = dateString.split('-');
    let year= parseInt(dateSplit[0]);
    let month = parseInt(dateSplit[1]);
    let day = parseInt(dateSplit[2]);
    OrderModel.aggregate([{$project: {_id:1,year:{$year:"$orderDate"},month:{$month:"$orderDate"}, day:{$dayOfMonth:"$orderDate"},orderAmount:1}}, {$group: {_id:{year:"$year",month:"$month",day:"$day"}, sum:{$sum:"$orderAmount"}, count:{$sum:1}}},
    {$match : {"_id.year" : year, "_id.month" : month, "_id.day" : day}}],(err,data)=>{
        if(!err){
            res.json(data)
        }
    })  
    
}

let getWeeklyData = (req,res)=>{
    let startDate = new Date(req.params.sdate);
    let endDate = new Date(req.params.edate);
    OrderModel.aggregate([{$match : { "orderDate": { $gte: startDate, $lt: endDate} }},{$group : {_id : { $dateToString: { format: "%Y-%m-%d", date: "$orderDate" } },sum: { $sum:"$orderAmount"},count: { $sum: 1 }}}],(err,data)=>{
        if(!err){
            res.json(data)
        }   
    })

}

let getMonthlyData = (req,res)=>{
    let dateString = req.params.date;
    const dateSplit = dateString.split('-');
    let year= parseInt(dateSplit[0]);
    let month = parseInt(dateSplit[1]);
    OrderModel.aggregate([{$project: {_id:1,year:{$year:"$orderDate"},month:{$month:"$orderDate"}, day:{$dayOfMonth:"$orderDate"},orderAmount:1}}, {$group: {_id:{year:"$year",month:"$month",day:"$day"}, sum:{$sum:"$orderAmount"}, count:{$sum:1}}},
    {$match : {"_id.year" : year, "_id.month" : month}}],(err,data)=>{
        if(!err){
            res.json(data)
        }
    })  

}

let updateOrderStatusByID = (req,res)=>{
    let orderID = req.body.orderID;
    let newStatus = req.body.orderStatus;
    OrderModel.updateOne({_id:orderID},{$set:{orderStatus:newStatus}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Order status updated successfully");
            }else{
                res.send("Order ID does not exist");
            }
        }else{
            res.send("Something went wrong...");
        }
    })
}

let deleteOrderByID = (req,res)=>{
    OrderModel.deleteOne({_id:req.params.orderID},(err,data)=>{
        if(!err){
            if(data.deletedCount==1){
                res.send("Order status updated successfully");
            }else{
                res.send("Order ID does not exist");
            }
        }else{
            res.send("Something went wrong...");
        }
    })
}


module.exports={getAllOrderDetails,getOrderById,storeNewOrder,getOrderReportByCustomerId,getDailyData,getWeeklyData,getMonthlyData,updateOrderStatusByID,deleteOrderByID}
