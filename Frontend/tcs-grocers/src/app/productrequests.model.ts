export class ProductRequest{
    constructor(public _id:number,
        public employeeID:number,
        public productID:number,
        public requestType:number,
        public openclosed:number){}
}