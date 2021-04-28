export class User{
    constructor(
        public _id:number,
        public fName:string,
        public lName:string,
        public email:string,
        public username:string,
        public password:string,
        public birthday:string,
        public phoneNumber:string,
        public funds:number,
        public failedLoginAttempts:number,
        public locked:number
    ){}
}