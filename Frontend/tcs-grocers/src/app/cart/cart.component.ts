import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { ProductService } from '../product.service';
import { User } from '../user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  hold:any="";
  msg?:string;
  userId:string="";
  userFunds:number=0
  user?:User;
  newBalance?:number;
  orderProcessed:boolean = false;
  orderNotProcessed:boolean = false;
  constructor(public router:Router, public cartSer:CartService,public userServ:CustomerService,public productServ:ProductService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.cartItem();
    this.cartDetails();
    this.loadCart();
    this.orderNotProcessed = false;
    this.orderProcessed = false;
    
  }
  getUserInfo(){
    this.hold= sessionStorage.getItem("userInfo")
      if(this.hold==null){
        this.userId = "100"
      }else if (this.hold!=null){
        let userInfo = JSON.parse(this.hold);
        this.userId = userInfo;
        this.userServ.getCustomerById(this.userId).subscribe(res=>{
          this.user=res[0];
          this.userFunds = this.user.funds;
        });
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
      this.total=0;
      this.cartDetailsArr = JSON.parse(localStorage.getItem(this.userId)||'{}');
      for (let index = 0; index < this.cartDetailsArr.length; index++) {
        const item = this.cartDetailsArr[index];
        this.total= this.total + (item.qnt * (item.price * ((100-item.discount)/100))); 
      }
    }
  }
  deleteItem(singleItem:any){
    if(localStorage.getItem(this.userId)){
      this.cartDetailsArr = JSON.parse(localStorage.getItem(this.userId)||'{}');
      for (let i=0; i<this.cartDetailsArr.length;i++){
        if(this.cartDetailsArr[i]._id === singleItem){
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
          this.OrderDetails.productList.push({_id:this.cartDetailsArrs[i]._id,quantity:this.cartDetailsArrs[i].qnt});
          let newQnt = parseInt(this.cartDetailsArr[i].quantity) - parseInt(this.cartDetailsArrs[i].qnt);
          this.productServ.updateProductQuantity({productID:this.cartDetailsArrs[i]._id,newQuantity:newQnt}).subscribe()
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
      window.setTimeout(function(){location.reload()},1000);
      console.log(this.OrderDetails);
    

    }else{
      this.orderNotProcessed = true;
    }

  }

}