import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  cartItems?:Array<Product>;
  cart_items:number = 0;
  userId:string="";
  userFunds:number=0
  user?:User;
  hold:any="";
  productArray?:Array<Product>;
  constructor(public router:Router,public prodServ:ProductService,public userServ:CustomerService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.cartItem();
    //this.putUserInfo();
    this.getProducts()
  }
  getProducts():void{
    this.prodServ.getAllProducts().subscribe(res=>{
      this.productArray=res
      console.log(this.productArray)
      console.log(this.cartItems)
      if(this.cartItems!=null){
        this.cart_items = this.cartItems!.length;
        for (let i = 0; i < this.productArray!.length;i++){
          for(let j = 0; j < this.cartItems!.length;j++){
            if(this.productArray![i]._id===this.cartItems![j]._id){
              this.productArray![i].qnt = this.cartItems![j].qnt
            }
          }
        }
      }
    });
  }
  putUserInfo(){
    let userObj = sessionStorage.getItem('userInfo');
    if(userObj==null){

      let storeUserData:any = [{userID:120,userFunds:5000}];
      sessionStorage.setItem('userInfo',JSON.stringify(storeUserData))
  }
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

  cartItem(){
    if(localStorage.getItem(this.userId)!=null){
      this.cartItems = JSON.parse(localStorage.getItem(this.userId) || '{}');
      this.cart_items = this.cartItems!.length;
    }
  }
  prodCart:any=[];
  
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
      var id = prod._id;
      let inddex:number = -1;
      this.prodCart = JSON.parse(cartObj);
      for(let i=0; i<this.prodCart.length; i++){
        if(parseInt(id) === parseInt(this.prodCart[i]._id)){
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
