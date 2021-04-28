let express = require("express");
let router = express.Router();  //router reference. 
let CustomerController = require("../controller/customer.controller.js");

router.post("/createNewCustomer",CustomerController.createNewCustomer);
router.post("/login",CustomerController.login);
router.post("/updatePassword/:customerID",CustomerController.updatePassword)

router.get("/getAllCustomers",CustomerController.getAllCustomers);
router.get("/getCustomerById/:customerID",CustomerController.getCustomerById);

router.put("/unlockUser/:customerID",CustomerController.unlockUser);
router.put("/addFunds/:customerID/:fundsToAdd",CustomerController.addFunds);
router.put("/updateName/:customerID/:fName/:lName",CustomerController.updateName);
router.put("/updateEmail/:customerID/:email",CustomerController.updateEmail);
router.put("/updateUsername/:customerID/:username",CustomerController.updateUsername);
router.put("/updateBirthday/:customerID/:birthday",CustomerController.updateBirthday);
router.put("/updatePhoneNumber/:customerID/:phoneNumber",CustomerController.updatePhoneNumber);
router.put("/refundCustomerById/:customerId/:refundAmount",CustomerController.refundCustomerById);

module.exports=router;