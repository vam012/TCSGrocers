export class Cart{
    constructor(
        public customerID:Number,
        public orderAmount:Number,
        public productList:[{
            _id:Number,
            quantity:Number
        }]){}
}