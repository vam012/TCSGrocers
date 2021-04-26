import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.cartItem();
    this.cartDetails();
    this.loadCart();
  }
  cart_items:number = 0;
  cartDetailsArr:any = [];
  total:number = 0;
  cartItem(){
    if(localStorage.getItem('cart')!=null){
      let cartItems = JSON.parse(localStorage.getItem('cart') || '{}');
      this.cart_items = cartItems.length;
    }

    }
    cartDetails(){
      if(localStorage.getItem('cart')){
        this.cartDetailsArr = JSON.parse(localStorage.getItem('cart')||'{}');

      }
  }
  loadCart(){
    if(localStorage.getItem('cart')){
      this.cartDetailsArr = JSON.parse(localStorage.getItem('cart')||'{}');
      this.total = this.cartDetailsArr.reduce(function(acc:any,val:any){
        return acc+(val.prodPrice * val.qnt);
      },0)
    }
  }
  deleteItem(singleItem:any){
    if(localStorage.getItem('cart')){
      this.cartDetailsArr = JSON.parse(localStorage.getItem('cart')||'{}');
      for (let i=0; i<this.cartDetailsArr.length;i++){
        if(this.cartDetailsArr[i].prodId === singleItem){
          console.log(singleItem)
          this.cartDetailsArr.splice(i,1);
          localStorage.setItem('cart',JSON.stringify(this.cartDetailsArr));
          this.loadCart();        }
      }
    }
  }
}
