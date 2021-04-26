import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  msg?:string;
  constructor(public router:Router,public prodServ:ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(productRef:any):void{
    this.prodServ.addNewProduct(productRef).subscribe((res:string)=>this.msg=res,(err:string)=>console.log(err))
    console.log(`productname: ${productRef.name}, price: ${productRef.price}, quantity: ${productRef.quantity}`)
  }

}
