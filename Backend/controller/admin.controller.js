const { json } = require("body-parser");
let AdminModel = require("../model/admin.model.js");

let login = (req,res)=>{
    let usernameAtt = req.body.username;
    let passwordAtt = req.body.password;
    AdminModel.find({username:usernameAtt},(err,data)=>{
        if(!err){   
            if(data.username===usernameAtt){
                if(data.password===passwordAtt){
                    res.send("Login successful");
                }else{
                    res.send("Incorrect password")
                }
            }else{
                res.send("Invalid username")
            }
        }else{
            res.send("Something went wrong");
        }
    })
}

module.exports={login}