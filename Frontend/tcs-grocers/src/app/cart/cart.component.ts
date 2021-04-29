import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { User } from '../user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  msg?:string;
  userId:string="";
  userFunds:number=0
  user?:User;
  newBalance?:number;
  orderProcessed:boolean = false;
  orderNotProcessed:boolean = false;
  constructor(public router:Router, public cartSer:CartService,public userServ:CustomerService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.cartItem();
    this.cartDetails();
    this.loadCart();
    this.orderNotProcessed = false;
    this.orderProcessed = false;
    
  }
  getUserInfo(){
    if(sessionStorage.getItem('userInfo')!=null){
      let customerInfo = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
      this.userId=customerInfo[0].userID;
      this.userFunds = customerInfo[0].userFunds;
    }
  }
  cart_items:number = 0;
  cartDetailsArr:any = [];
  
  OrderDetails:any = {
     customerID:Number,
     orderAmount:Number,
     productList:[{
        _id:Number,
        quantity:Number
    }]
  };
  cartDetailsArrs:any = [];
  total:number = 0;
  cartItem(){
    if(localStorage.getItem(this.userId)!=null){
      let cartItems = JSON.parse(localStorage.getItem(this.userId) || '{}');
      this.cart_items = cartItems.length;
    }

    }
    cartDetails(){
      if(localStorage.getItem(this.userId)){
        this.cartDetailsArr = JSON.parse(localStorage.getItem(this.userId)||'{}');

      }
  }
  loadCart(){
    if(localStorage.getItem(this.userId)){
      this.cartDetailsArr = JSON.parse(localStorage.getItem(this.userId)||'{}');
      this.total = this.cartDetailsArr.reduce(function(acc:any,val:any){
        return acc+((val.price * val.qnt)*(val.discount/100));
      },0)
    }
  }
  deleteItem(singleItem:any){
    if(localStorage.getItem(this.userId)){
      this.cartDetailsArr = JSON.parse(localStorage.getItem(this.userId)||'{}');
      for (let i=0; i<this.cartDetailsArr.length;i++){
        if(this.cartDetailsArr[i].prodId === singleItem){
          console.log(singleItem)
          this.cartDetailsArr.splice(i,1);
          localStorage.setItem(this.userId,JSON.stringify(this.cartDetailsArr));
          this.cart_items-=1;
          this.loadCart();        
        }
      }
    }
  }
  checkout(){
    if((this.userFunds > this.total)&&(localStorage.getItem(this.userId)!=null)){
      this.newBalance = this.userFunds - this.total;
      this.orderProcessed=true;
      if(localStorage.getItem(this.userId)){
        this.cartDetailsArrs = JSON.parse(localStorage.getItem(this.userId)||'{}');
        for (let i=0; i<this.cartDetailsArrs.length;i++){
          this.OrderDetails.productList.push({_id:this.cartDetailsArrs[i].prodId,quantity:this.cartDetailsArrs[i].qnt});
        } 
        this.OrderDetails.orderAmount = this.total;
        this.OrderDetails.customerID = this.userId;
      }

      localStorage.removeItem(this.userId);
     
      this.cartSer.addNewOrder(this.OrderDetails).subscribe((res:string)=>{
        this.msg=res;
        })
      // this.userServ.getCustomerById(this.userId).subscribe(res=>{
      //   this.user=res[0];
      //   this.userFunds = this.user.funds - this.total;
      // });
      this.userServ.addFunds(this.userId,(this.total*-1)).subscribe((res:string)=>{
        this.msg = res;
      //  this.updateUserFunds();
      });
      window.setTimeout(function(){location.reload()},3000);
      console.log(this.OrderDetails);
    

    }else{
      this.orderNotProcessed = true;
    }

  }

}