import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  addNewProduct(productRef:any):void{
    this.msg = `productname: ${productRef.productName}, price: ${productRef.price}, quantity: ${productRef.quantity}`
  }

}
