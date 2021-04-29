import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userId:string="";
  userFunds:number=0
  newBalance?:number;
  orderProcessed:boolean = false;
  orderNotProcessed:boolean = false;
  constructor(public router:Router) { }

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
        return acc+(val.prodPrice * val.qnt);
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
    if(this.userFunds > this.total){
      this.newBalance = this.userFunds - this.total;
      this.orderProcessed=true;

      /* let orderArr = [
        // this.orderservice.addOrder().subscribe(res=>{

      //  })
      //   {
      //     customerID:this.userId,
      //     orderAmount:this.total,
      //     productList:[{_id:req.body.productId, quantity:req.body.quantity}],
      //   }
      // ]
      //here I have to add stuff from local and store in an array and then transfer it to the order model*/
      localStorage.removeItem(this.userId);
      window.setTimeout(function(){location.reload()},3000)
    

    }else{
      this.orderNotProcessed = true;
    }

  }
}
