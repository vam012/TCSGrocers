export class User{
    constructor(
        public _id:Number,
        public fName:String,
        public lName:String,
        public email:String,
        public username:String,
        public password:String,
        public birthday:String,
        public phoneNumber:String,
        public funds:Number,
        public failedLoginAttempts:Number,
        public locked:Number
    ){}
}