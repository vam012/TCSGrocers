import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.css']
})
export class AdminDeleteProductComponent implements OnInit {

  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }

  deleteProduct(productRef:any):void{
    this.msg = `productID: ${productRef.productID}`
  }

}
