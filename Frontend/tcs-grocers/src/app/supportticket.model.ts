export class SupportTicket{
    constructor(
        public _id:number,
        public customerID:number,
        public reason:string,
        public openclosed:number
    ){}
}