const { json } = require("body-parser");
let CustomerModel = require("../model/customer.model.js");

let createNewCustomer = (req,res)=>{
    let holdArr = [];
    CustomerModel.find({},(err,data)=>{
        if(!err){   
            holdArr = data;
            let nextID = (holdArr.length == 0)? 100:holdArr[holdArr.length-1]._id+1;
            let newEmp = new CustomerModel({
                _id:nextID,
                fName:req.body.fName,
                lName:req.body.lName,
                email:req.body.email,
                username:req.body.username,
                password:req.body.password,
                birthday:req.body.birthday,
                phoneNumber:req.body.phoneNumber,
                funds:1000,
                failedLoginAttempts:0,
                locked:0
            });
            newEmp.save((err,data)=>{
                if(!err){
                    res.send("Data stored successfully")
                }else{
                    res.send("Something went wrong...")
                }
            })
        }else{
            res.send("Something went wrong...");
        }
    });
}

let getAllCustomers = (req,res)=>{
    CustomerModel.find({},(err,data)=>{
        if(!err){
            res.json(data);
        }else{
            res.send("Something went wrong")
        }
    })
}

let getCustomerById = (req,res)=>{
    let id = req.params.customerID;
    CustomerModel.find({_id:id},(err,data)=>{
        if(!err){
            res.json(data);
        }else{
            res.send("Something went wrong")
        }
    })
}

let login = (req,res)=>{
    let usernameAtt = req.body.username;
    let passwordAtt = req.body.password;
    CustomerModel.find({username:usernameAtt},(err,data)=>{
        if(!err){
            if(data.username===usernameAtt){
                if(data.failedLoginAttempts>=3){
                    CustomerModel.updateOne({username:usernameAtt},{$set:{locked:1}},(err,res)=>{})
                    res.send("Too many login attempts");
                }else{
                    if(data.password===passwordAtt){
                        res.send("Login successful");
                    }else{
                        CustomerModel.updateOne({username:usernameAtt},{$inc:{failedLoginAttempts:1}},(err,res)=>{})
                        res.send("Incorrect password");
                    }
                }
            }else{
                res.send("Incorrect username")
        }
        }else{
            res.send("Something went wrong");
        }
    })
}

let unlockUser = (req,res)=>{
    let id = req.params.customerID;
    CustomerModel.updateOne({_id:id},{$set:{locked:0}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully unlocked user");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let addFunds = (req,res)=>{
    let id = req.params.customerID;
    let fundsToAdd = req.params.fundsToAdd;
    CustomerModel.updateOne({_id:id},{$ince:{funds:fundsToAdd}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated user funds");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let updateName = (req,res)=>{
    let id = req.params.customerID;
    let fName=req.params.fName;
    let lName=req.params.lName;
    CustomerModel.updateOne({_id:id},{$set:{fName:fName,lName:lName}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated user name");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let updateEmail = (req,res)=>{
    let id = req.params.customerID;
    let email=req.params.email;
    CustomerModel.updateOne({_id:id},{$set:{email:email}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated user email");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let updateUsername = (req,res)=>{
    let id = req.params.customerID;
    let username=req.params.username;
    CustomerModel.updateOne({_id:id},{$set:{username:username}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated username");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let updatePassword = (req,res)=>{
    let id = req.params.customerID;
    let newPassword=req.body.password;
    CustomerModel.find({_id:id},(err,data)=>{
        if(!err){
            if(data.password!=newPassword){
                CustomerModel.find({_id:id},{$set:{password:newPassword}},(err,data)=>{
                    if(data.nModified==1){
                        res.send("Successfully updated user password");
                    }else{
                        res.send("User does not exist")
                    }
                });
            }else{
                res.send("New password cannot be the same as old password")
            }
        }
        else{
            res.send("Something went wrong")
        }
    })
}

let updateBirthday = (req,res)=>{
    let id = req.params.customerID;
    let birthday=req.params.birthday;
    CustomerModel.updateOne({_id:id},{$set:{bithday:birthday}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated user birthday");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

let updatePhoneNumber = (req,res)=>{
    let id = req.params.customerID;
    let phoneNumber=req.params.phoneNumber;
    CustomerModel.updateOne({_id:id},{$set:{phoneNumber:phoneNumber}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully updated user phone number");
            }else{
                res.send("User does not exist")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

module.exports={createNewCustomer,getAllCustomers,getCustomerById,login,unlockUser,addFunds,updateName,updateEmail,updateUsername,updatePassword,updateBirthday,updatePhoneNumber}
