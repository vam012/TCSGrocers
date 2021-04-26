//Load all required modules 
let app = require("express")();
let cors = require('cors');
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let port = 7777;

//Database URL Details 
let url = "mongodb://localhost:27017/finalproject";

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors())                                     // allow communication from other localhost

//Database connection without warning 
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module 
var Admin = require("./router/admin.router.js");
var Cart = require("./router/cart.router.js");
var Customer = require("./router/customer.router.js");
var Employee = require("./router/employee.router.js");
var Order = require("./router/order.router.js")
var Product = require("./router/product.router.js");
var ProductRequest = require("./router/productrequest.router.js");
var SupportTicket = require("./router/supportticket.router.js");


//Middleware 
app.use("/admin",Admin)
app.use("/carts",Cart)
app.use("/customers",Customer)
app.use("/employees",Employee)
app.use("/orders",Order)
app.use("/products",Product)
app.use("/productrequests",ProductRequest)
app.use("/supporttickets",SupportTicket)

app.listen(port,()=>console.log(`Server running on port number ${port}`));

