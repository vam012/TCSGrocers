let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods. 
router.get("/getAllOrderDetails",OrderController.getAllOrderDetails)
router.get("/getOrderById/:orderID",OrderController.getOrderById)
router.get("/getOrderByCustomerId/:customerID",OrderController.getOrderByCustomerId)
router.post("/storeNewOrder",OrderController.storeNewOrder)
router.get("/getDailydata",OrderController.getDailydata)
router.get("/getWeeklydata",OrderController.getWeeklydata)
router.get("/getMonthlydata",OrderController.getMonthlydata)
router.get("/getOrderByProductId/:productID",OrderController.getOrderByProductId)
router.put("/updateOrderStatusByID/:oid/:orderStatus",OrderController.updateOrderStatusByID)

module.exports=router;