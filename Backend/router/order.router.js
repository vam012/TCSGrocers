let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods. 
router.get("/getAllOrderDetails",OrderController.getAllOrderDetails)
router.get("/getOrderById/:pid",OrderController.getOrderById)
router.get("/getOrderByCustomerId/:cid",OrderController.getOrderByCustomerId)
router.post("/storeNewOrder",OrderController.storeNewOrder)


module.exports=router;