let express = require("express");
let router = express.Router();  //router reference. 
let CartController = require("../controller/cart.controller.js");

router.post("/createNewCart",CartController.createNewCart)

router.get("/getAllCarts",CartController.getAllCarts);
router.get("/getAllCartsByCustomerId/:customerID",CartController.getAllCartsByCustomerId);
router.get("/getAllSoldCarts",CartController.getAllSoldCarts)

router.put("/addNewItemToCart/:orderNumber/:productID/:quantity",CartController.addNewProductToCart);
router.put("/removeProductFromCart/:orderNumber/:productID",CartController.removeProductFromCart);
router.put("/updateProductQuantity/:orderNumber/:productID/:quantity",CartController.updateProductQuantity);
router.put("/updateCartStatus/:orderNumber/:newStatus/:cancelReason",CartController.updateCartStatus)

module.exports=router;