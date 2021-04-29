let express = require("express");
let router = express.Router();  //router reference. 
let CustomerController = require("../controller/customer.controller.js");

router.post("/createNewCustomer",CustomerController.createNewCustomer);
router.post("/login",CustomerController.login);

router.get("/getAllCustomers",CustomerController.getAllCustomers);
router.get("/getCustomerById/:customerID",CustomerController.getCustomerById);
router.get("/getCustomerByUsername/:username",CustomerController.getCustomerByUsername)

router.put("/unlockUser",CustomerController.unlockUser);
router.put("/updatePassword",CustomerController.updatePassword)
router.put("/addFunds",CustomerController.addFunds);
router.put("/updateName",CustomerController.updateName);
router.put("/updateEmail",CustomerController.updateEmail);
router.put("/updateUsername",CustomerController.updateUsername);
router.put("/updateBirthday:customerID/:birthday",CustomerController.updateBirthday);
router.put("/updatePhoneNumber",CustomerController.updatePhoneNumber);

module.exports=router;