let express = require("express");
let router = express.Router();  //router reference. 
let SupportTicketController = require("../controller/supportticket.controller.js");

router.post('/createNewSupportTicket',SupportTicketController.createNewSupportTicket);

router.get('/getAllSupportTickets',SupportTicketController.getAllTickets);
router.get('/getOpenTicketsByID/:id',SupportTicketController.getOpenTicketsByID);

router.put('/updateSupportTicketStatus',SupportTicketController.updateSupportTicketStatus);

router.delete('/closeTicketByID/:ticketID',SupportTicketController.closeSupportTicketByID)


module.exports=router;