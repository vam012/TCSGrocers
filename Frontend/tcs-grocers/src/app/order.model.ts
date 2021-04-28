export class Order{
    constructor(public _id:number,
        public customerID:number,
        public productList:{
            _id:Number,
            quantity:Number
        },
        public orderDate:String,
        public orderAmount:number,
        public orderStatus:String,
        public cancelReason:String){}
}