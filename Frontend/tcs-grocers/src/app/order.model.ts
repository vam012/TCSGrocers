export class Order{
    constructor(public _id:number,
        public customerID:number,
        public productList:{
            _id:Number,
            quantity:Number
        },
        public orderDate:string,
        public orderAmount:number,
        public orderStatus:string,
        public cancelReason:string){}
}