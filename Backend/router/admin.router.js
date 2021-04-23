let express = require("express");
let router = express.Router();  //router reference. 
let AdminController = require("../controller/admin.controller.js");

router.post("/login",AdminController.login);

module.exports=router;