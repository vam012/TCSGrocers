let express = require("express");
let router = express.Router();  //router reference. 
let CartController = require("../controller/cart.controller.js");

router.post("/createNewCart",CartController.createNewCart)

router.get("/getAllCarts",CartController.getAllCarts);
router.get("/getAllCartsByCustomerId/:customerID",CartController.getAllCartsByCustomerId);

router.put("/addNewProductToCart/:customerID/:productID/:quantity",CartController.addNewProductToCart);
router.put("/removeProductFromCart/:customerID/:productID",CartController.removeProductFromCart);
router.put("/updateProductQuantity/:customerID/:productID/:quantity",CartController.updateProductQuantity);
module.exports=router;