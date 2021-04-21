let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

router.get("/login",EmployeeController.login);

router.post("/createNewEmployee",EmployeeController.createNewEmployee);

router.put("/updatePassword/:id",EmployeeController.updatePassword);

router.delete("/deleteEmployeeById",EmployeeController.deleteEmployeeById)

module.exports=router;