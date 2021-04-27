let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

router.get("/login",EmployeeController.login);
router.get("/allEmployeeDetails",EmployeeController.getAllEmployeeDetails)

router.post("/createNewEmployee",EmployeeController.createNewEmployee);

router.put("/updatePassword/:id",EmployeeController.updatePassword);

router.delete("/deleteEmployeeById/:eid",EmployeeController.deleteEmployeeById)

module.exports=router;