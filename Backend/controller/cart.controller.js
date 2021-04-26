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
    let customerID = req.params.customerID
    CartModel.find({_id:customerID},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

let addNewProductToCart = (req,res)=>{
    let customerID = req.params.customerID;
    let productID = req.params.productID;
    let quantity = req.params.quantity;
    CartModel.updateOne({_id:customerID},{$push:{productList:{_id:productID,quantity:quantity}}},(err,data)=>{
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
    let customerID = req.body.customerID;
    let productID = req.body.productid;
    CartModel.updateOne({_id:customerID},
        { $pull: {productList:{_id:productID}}},
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
    let customerID = req.body.customerID;
    let productID = req.body.productid;
    let quantity = req.body.quantity;
    CartModel.updateOne({_id:customerID, "productList._id":productID},
        { $set: { "productList.$.quantity" : quantity } },
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
        _id:req.body.customerID,
        productList:[{_id:req.body.productId, quantity:req.body.quantity}],
    });
    newCart.save((err,data)=>{
        if(!err){
            res.send("Created new cart successfully")
        }else{
            res.send("Something went wrong")
        }
    })
}


module.exports={getAllCarts,getAllCartsByCustomerId,addNewProductToCart,removeProductFromCart,updateProductQuantity,createNewCart}
