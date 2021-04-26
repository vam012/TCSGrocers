let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controller/product.controller.js");

//mapping sub path with http methods. 
router.get("/allProductDetails",ProductController.getAllProductDetails)
router.get("/getProductById/:pid",ProductController.getProductById)

router.post("/storeProductDetails",ProductController.storeNewProduct)

router.delete("/deleteProductById/:pid",ProductController.deleteProductById)

router.put('/updateProductName',ProductController.updateProductName)
router.put('/updateProductPrice',ProductController.updateProductPrice)
router.put('/updateProductQuantity',ProductController.updateProductQuantity)
router.put('/updateProductDiscount',ProductController.updateProductDiscount)




module.exports=router;