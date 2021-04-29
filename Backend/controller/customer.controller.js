const { json } = require("body-parser");
let CustomerModel = require("../model/customer.model.js");

let createNewCustomer = (req,res)=>{
    let holdArr = [];
    CustomerModel.find({},(err,data)=>{
        if(!err){
            CustomerModel.find({username:req.body.username},(err,check)=>{
                if(check.length==0){
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
                    res.send("Username is taken")
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

let getCustomerByUsername = (req,res)=>{
    let username = req.params.username;
    CustomerModel.find({username:username},(err,data)=>{
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
            if(data.length==1){
                if(data[0].username===usernameAtt){
                    if(data[0].failedLoginAttempts>=3){
                        CustomerModel.updateOne({username:usernameAtt},{$set:{locked:1}},(err,res)=>{})
                        res.send("Too many login attempts, please create a support ticket to have your account unlocked");
                    }else{
                        if(data[0].password===passwordAtt){
                            CustomerModel.updateOne({username:usernameAtt},{$set:{failedLoginAttempts:0}},(err,res)=>{})
                            res.send("Login successful");
                        }else{
                            CustomerModel.updateOne({username:usernameAtt},{$inc:{failedLoginAttempts:1}},(err,res)=>{})
                            res.send("Incorrect password");
                        }
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
    let id = req.body.userID;
    CustomerModel.updateOne({_id:id},{$set:{locked:0,failedLoginAttempts:0}},(err,data)=>{
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
    let id = req.body.customerID;
    let fundsToAdd = req.body.fundsToAdd;
    CustomerModel.updateOne({_id:id},{$inc:{funds:fundsToAdd}},(err,data)=>{
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
    let id = req.body.customerID;
    let fName=req.body.fName;
    let lName=req.body.lName;
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
    let id = req.body.customerID;
    let email=req.body.email;
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
    let id = req.body.customerID;
    let username=req.body.username;
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
    let id = req.body.customerID;
    let newPassword=req.body.password;
    CustomerModel.find({_id:id},(err,data)=>{
        if(!err){
            if(data[0].password!=newPassword){
                CustomerModel.updateOne({_id:id},{$set:{password:newPassword}},(err,ret)=>{
                    if(ret.nModified==1){
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
    let id = req.body.customerID;
    let phoneNumber=req.body.phoneNumber;
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



let refundCustomerById = (req,res)=>{
    let id = req.params.customerId;
    let amount = req.params.refundAmount;
    CustomerModel.updateOne({_id:id},{$inc:{funds:amount}},(err,data)=>{
        if(!err){
            if(data.nModified==1){
                res.send("Successfully refunded the amount");
            }else{
                res.send("No refund granted")
            }
        }else{
            res.send("Something went wrong")
        }
    })
}

module.exports={createNewCustomer,getAllCustomers,getCustomerById,getCustomerByUsername,login,unlockUser,addFunds,updateName,updateEmail,updateUsername,updatePassword,updateBirthday,updatePhoneNumber,refundCustomerById}

