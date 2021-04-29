const { json } = require("body-parser");
let AdminModel = require("../model/admin.model.js");

let login = (req,res)=>{
    let usernameAtt = req.body.username;
    let passwordAtt = req.body.password;
    AdminModel.findOne({},(err,data)=>{
        if(!err){
            if(data!=null){   
                if(data.username==usernameAtt){
                    if(data.password==passwordAtt){
                        res.send("Login successful");
                    }else{
                        res.send("Incorrect password")
                    }
                }else{
                    res.send("Invalid username")
                }
            }else{
                let adminCreds = new AdminModel({
                    username:"admin",
                    password:"admin"
                });
                adminCreds.save((err,result)=>{
                    if(result.username==usernameAtt){
                        if(result.password==passwordAtt){
                            res.send("Login successful");
                        }else{
                            res.send("Incorrect password")
                        }
                    }else{
                        res.send("Invalid username")
                    }
                })
            }
        }else{
            res.send("Something went wrong");
        }
    })
}

module.exports={login}