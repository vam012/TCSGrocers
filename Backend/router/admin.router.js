let express = require("express");
let router = express.Router();  //router reference. 
let AdminController = require("../controller/product.controller.js");

router.get("/login",AdminController.login);


module.exports=router;