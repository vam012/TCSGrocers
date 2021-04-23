const { json } = require("body-parser");
let AdminModel = require("../model/admin.model.js");

let login = (req,res)=>{
    createAdmin();
    let usernameAtt = req.body.username;
    let passwordAtt = req.body.password;
    AdminModel.findOne({},(err,data)=>{
        if(!err){   
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
            res.send("Something went wrong");
        }
    })
}

function createAdmin(){
    AdminModel.find({},(err,response)=>{
        if(!err){
            if(response.length==0){
                let adminCreds = new AdminModel({
                    username:"admin",
                    password:"admin"
                });
                adminCreds.save();
            }
        }
    });
}

module.exports={login}