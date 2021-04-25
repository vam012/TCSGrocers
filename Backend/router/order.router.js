let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods. 
router.get("/getAllOrderDetails",OrderController.getAllOrderDetails)
router.get("/getOrderById/:oid",OrderController.getOrderById)
router.get("/getOrderByCustomerId/:cid",OrderController.getOrderByCustomerId)
router.post("/storeNewOrder",OrderController.storeNewOrder)
router.get("/getDailydata",OrderController.getDailydata)
router.get("/getWeeklydata",OrderController.getWeeklydata)
router.get("/getMonthlydata",OrderController.getMonthlydata)
router.get("/getOrderByProductId/:pid",OrderController.getOrderByProductId)

module.exports=router;