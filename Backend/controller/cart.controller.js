const { json } = require("body-parser");
let CartModel = require("../model/cart.model.js");

let getAllCarts = (req,res)=>{
    CartModel.find({},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let getAllCartsByCustomerId = (req,res)=>{
    let custID = req.params.customerID
    CartModel.find({customerID:custID},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let addNewProductToCart = (req,res)=>{
    let orderToChange = req.params.orderNumber;
    let productID = req.params.productID;
    let quantity = req.params.quantity;
    CartModel.updateOne({orderNumber:orderToChange},{$push:{productID:productID,quantity:quantity}},(err,data)=>{
        if(!err){
            if(data.nModified == 1){
                res.send("Successfully updated quantity")
            }else{
                res.send("Cart model does not exist");
            }
        }else{
            res.send("Something went wrong!")
        }
    })
}

let removeProductFromCart = (req,res)=>{
    let orderToChange = req.body.ordernumber;
    let productID = req.body.productid;
    CartModel.updateOne({orderNumber:orderToChange},
        { $pull: "productList.$[elem]"},
        {   multi: false,
            arrayFilters: [ { "elem.productID":productID } ]},
        (err,data)=>{
        if(!err){
            if(data.nModified == 1){
                res.send("Successfully updated quantity")
            }else{
                res.send("Cart model does not exist");
            }
        }else{
            res.send("Something went wrong!")
        }
    })
}

let updateProductQuantity = (req,res)=>{
    let orderToChange = req.body.orderNumber;
    let productID = req.body.productid;
    let quantity = req.body.quantity;
    CartModel.updateOne({orderNumber:orderToChange},
        { $push: { "productList.$[elem].quantity" : quantity } },
        {   multi: false,
            arrayFilters: [ { "elem.productID":productID } ]},
        (err,data)=>{
        if(!err){
            if(data.nModified == 1){
                res.send("Successfully updated quantity")
            }else{
                res.send("Cart model does not exist");
            }
        }else{
            res.send("Something went wrong!")
        }
    })
}

let createNewCart = (req,res)=>{
    let newCart = new CartModel({
        customerID:req.body.customerID,
        orderNumber:1,
        productList:[],
        orderStatus:0,
        cancelReason:""
    });
    newCart.save((err,data)=>{
        if(!err){
            res.send("Created new cart successfully")
        }else{
            res.send("Something went wrong")
        }
    })
}

let getAllSoldCarts = (req,res)=>{
    let soldNumber = 3
    CartModel.find({orderStatus:soldNumber},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let updateCartStatus = (req,res)=>{
    let orderToChange = req.body.ordernumber;
    let newStatus = req.body.newStatus;
    let cancelReason = req.body.cancelReason;
    CartModel.updateOne({orderNumber:orderToChange},{$set:{orderStatus:newStatus,cancelReason:cancelReason}},(err,data)=>{
        if(!err){
            if(data.nModified == 1){
                res.send("Successfully updated quantity")
            }else{
                res.send("Cart model does not exist");
            }
        }else{
            res.send("Something went wrong!")
        }
    })
}

module.exports={getAllCarts,getAllCartsByCustomerId,addNewProductToCart,removeProductFromCart,updateProductQuantity,createNewCart,getAllSoldCarts,updateCartStatus}
