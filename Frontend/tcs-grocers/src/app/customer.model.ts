export class Customer{
    constructor(public _id:number,
    	public fName:String,
    	public lName:String,
    	public email:String,
    	public username:String,
    	public password:String,
    	public birthday:String,
    	public phoneNumber:String,
    	public funds:Number,
    	public failedLoginAttempts:Number,
    	public locked:Number){}
}