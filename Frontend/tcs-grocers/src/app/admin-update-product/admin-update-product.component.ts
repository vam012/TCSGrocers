import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent implements OnInit {

  product={
    name:"Product Name",
    price:10.00,
    quantity:100,
    discount:0
  }
  msg?:string
  selectedProductID?:any
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }

  updateProductID(formRef:any):void{
    this.selectedProductID = formRef.productID;
  }

  updateProductName(formRef:any):void{
    this.product.name = formRef.productName;
  }

  updateProductPrice(formRef:any):void{
    this.product.price = formRef.productPrice;
  }

  updateProductQuantity(formRef:any):void{
    this.product.quantity = formRef.productQuantity;
  }

  updateProductDiscount(formRef:any):void{
    this.product.discount = formRef.productDiscount;
  }

}
