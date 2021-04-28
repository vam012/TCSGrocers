export class Order{
    constructor(public _id:number,
        public customerID:number,
        public productList:{
            _id:Number,
            quantity:Number
        },
        public orderDate:String,
        public orderAmount:Number,
        public orderStatus:String,
        public cancelReason:String){}
}