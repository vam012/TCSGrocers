let express = require("express");
let router = express.Router();  //router reference. 
let ProductRequestController = require("../controller/productrequest.controller.js");

router.post(`/createNewProductRequest`,ProductRequestController.createNewProductRequest)

router.get('/getAllProductRequests',ProductRequestController.getAllRequests)

router.put('/closeProductRequestByID',ProductRequestController.updateProductRequestStatus);

module.exports=router;