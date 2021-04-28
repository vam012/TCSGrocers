import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  userId:string="";
  userFunds:number=0
  
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.cartItem();
    this.putUserInfo();
    this.getUserInfo();
  }
  putUserInfo(){
    let userObj = sessionStorage.getItem('userInfo');
    if(userObj==null){

      let storeUserData:any = [{userID:120,userFunds:5000}];
      sessionStorage.setItem('userInfo',JSON.stringify(storeUserData))
  }
}
getUserInfo(){
  if(sessionStorage.getItem('userInfo')!=null){
    let customerInfo = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
    this.userId=customerInfo[0].userID;
    this.userFunds = customerInfo[0].userFunds;
  }
}


  cart_items:number = 0;
  cartItem(){
    if(localStorage.getItem(this.userId)!=null){
      let cartItems = JSON.parse(localStorage.getItem(this.userId) || '{}');
      this.cart_items = cartItems.length;
      console.log(this.cart_items);
    }else{
      console.log("null")
    }
  }
  prodCart:any=[];
  //for now it is hard coded... this will come from PRODUCT table API
  productArray=[
    {
      prodId:1, //unique ID
      prodName:"hp laptop",
      prodPrice:"1000",
      prodQuantity: 25,
      qnt:1,
      discount:50
    },
    {
      prodId:2,
      prodName:"Hair dryer",
      prodPrice:"100",
      prodQuantity: 20,
      qnt:1,
      discount:25
    },
    {
      prodId:3,
      prodName:"Perfume",
      prodPrice:"80",
      prodQuantity: 15,
      qnt:1,
      discount:5
    },
    {
      prodId:4,
      prodName:"TV",
      prodPrice:"1200",
      prodQuantity: 10,
      qnt:1,
      discount:10
    },
    {
      prodId:5,
      prodName:"Monitor",
      prodPrice:"300",
      prodQuantity: 5,
      qnt:1,
      discount:30
    }

  ];
  inc(prod:any){

    if(prod.qnt != prod.prodQuantity){
      prod.qnt += 1;
    }
    

  }
  dec(prod:any){

    if(prod.qnt !=1){
      prod.qnt -= 1;
    }
  }
  addCart(prod:any){
    
    let cartObj = localStorage.getItem(this.userId);
    if(cartObj==null){

      let storeCartData:any = [];
      storeCartData.push(prod);
      localStorage.setItem(this.userId,JSON.stringify(storeCartData))
      
    }else{
      var id = prod.prodId;
      let inddex:number = -1;
      this.prodCart = JSON.parse(cartObj);
      for(let i=0; i<this.prodCart.length; i++){
        if(parseInt(id) === parseInt(this.prodCart[i].prodId)){
          this.prodCart[i].qnt = prod.qnt;
          inddex = i;
         
          break;
        }
      }
      if(inddex == -1){
        this.prodCart.push(prod);
        localStorage.setItem(this.userId,JSON.stringify(this.prodCart));
      }
      else{
        localStorage.setItem(this.userId,JSON.stringify(this.prodCart));
      }
    }
    this.cartItem();
  }
  }
