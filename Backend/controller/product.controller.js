const { json } = require("body-parser");
let ProductModel = require("../model/product.model.js");

//Retrieve all product details 
let getAllProductDetails =(req,res)=> {
    ProductModel.find({},(err,data)=> {
        if(!err){
            res.json(data);
        }
    })
}
//retrieve product details by id
let getProductById = (req,res)=>{
    let pid = req.params.pid;
    ProductModel.find({_id:pid},(err,data)=>{
        if(!err){
            res.json(data)
        }
    })
}

//store new entry in db
let storeNewProduct = (req,res)=>{
    let holdArr = [];
    ProductModel.find({},(err,data)=>{
        if(!err){   
            holdArr = data
            let nextID = (holdArr.length == 0)? 100:holdArr[holdArr.length-1]._id+1;
            let  product = new ProductModel({
                _id:nextID,
                name:req.body.name,
                quantity:req.body.quantity,
                price:req.body.price,
                discount:0,
                qnt:1
            })
            product.save((err,result)=>{
                if(!err){
                    res.send("Data stored successfully")
                }else{
                    res.send("Something went wrong...")
                }
            })
        }else{
            res.send("Something went wrong...")
        }
    });
}

//delete product by id
let deleteProductById = (req,res)=>{
    ProductModel.deleteOne({_id:req.params.pid},(err,data)=>{
        if(!err ){
            if( data.deletedCount == 1){res.send("Product deleted successfully ");}
            else{res.send("Product not found")}
        }else{
            res.send("Something went wrong...");
        }
    })
}

let updateProductPrice= (req,res)=>{
    ProductModel.updateOne({_id:req.body.productID},{$set:{price:req.body.newPrice}},(err,data)=>{
        if(!err ){
            if( data.nModified == 1){res.send("Product updated successfully ");}
            else{res.send("Product not found")}
        }else{
            res.send("Something went wrong...");
        }
    })
}

let updateProductName= (req,res)=>{
    ProductModel.updateOne({_id:req.body.productID},{$set:{name:req.body.newName}},(err,data)=>{
        if(!err ){
            if( data.nModified == 1){res.send("Product updated successfully ");}
            else{res.send("Product not found")}
        }else{
            res.send("Something went wrong...");
        }
    })
}

let updateProductQuantity= (req,res)=>{
    ProductModel.updateOne({_id:req.body.productID},{$set:{quantity:req.body.newQuantity}},(err,data)=>{
        if(!err ){
            if( data.nModified == 1){res.send("Product updated successfully ");}
            else{res.send("Product not found")}
        }else{
            res.send("Something went wrong...");
        }
    })
}

let updateProductDiscount= (req,res)=>{
    ProductModel.updateOne({_id:req.body.productID},{$set:{discount:req.body.newDiscount}},(err,data)=>{
        if(!err ){
            if( data.nModified == 1){res.send("Product updated successfully ");}
            else{res.send("Product not found")}
        }else{
            res.send("Something went wrong...");
        }
    })
}

module.exports={getAllProductDetails,getProductById,storeNewProduct,deleteProductById,updateProductQuantity,updateProductDiscount,updateProductName,updateProductPrice}