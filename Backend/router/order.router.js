let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods. 
router.get("/getAllOrderDetails",OrderController.getAllOrderDetails)
router.get("/getOrderById/:oid",OrderController.getOrderById)
router.get("/getOrderReportByCustomerId/:cid",OrderController.getOrderReportByCustomerId)
router.post("/storeNewOrder",OrderController.storeNewOrder)

router.get("/getDailyData/:date",OrderController.getDailyData)
router.get("/getWeeklyData/:sdate/:edate",OrderController.getWeeklyData)
router.get("/getMonthlyData/:date",OrderController.getMonthlyData)
router.put("/updateOrderStatusByID",OrderController.updateOrderStatusByID)

router.delete('/deleteOrderByID/:orderID',OrderController.deleteOrderByID)

module.exports=router;