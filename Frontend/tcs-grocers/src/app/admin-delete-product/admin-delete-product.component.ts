import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.css']
})
export class AdminDeleteProductComponent implements OnInit {

  allProducts?:Array<Product>
  msg?:string;

  constructor(public router:Router, public prodServ:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  deleteProduct(productRef:any):void{
    this.prodServ.deleteProductByID(productRef.value.productID).subscribe((res:string)=>{this.msg=res;
    productRef.reset();
    this.getProducts();});
    
  }

  getProducts():void{
    this.prodServ.getAllProducts().subscribe(res=>this.allProducts=res)
  }


}
