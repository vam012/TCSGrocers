import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent implements OnInit {

  product:Product=new Product(1,"null",-1,-1,-1);
  allProducts?:Array<Product>
  selectedProductID?:any
  constructor(public router:Router,public prodServ:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.prodServ.getAllProducts().subscribe(res=>this.allProducts=res,err=>console.log(err))
  }

  updateProductID(formRef:any):void{
    this.prodServ.getProductByID(formRef.value.productID).subscribe(res=>{this.selectedProductID = res[0]._id;this.product=res[0]},err=>console.log(err));
  }

  getUpdatedProduct():void{
    this.prodServ.getProductByID(this.selectedProductID).subscribe(res=>{this.selectedProductID = res[0]._id;this.product=res[0]},err=>console.log(err));
  }

  updateProductName(formRef:any):void{
    this.prodServ.updateProductName({'productID':this.selectedProductID,'newName':formRef.value.productName}).subscribe((res:string)=>{
      console.log(res);
      formRef.reset();
      this.getProducts();
      this.getUpdatedProduct();
    })
    
  }

  updateProductPrice(formRef:any):void{
    this.prodServ.updateProductPrice({'productID':this.selectedProductID,'newPrice':formRef.value.productPrice}).subscribe((res:string)=>{
      console.log(res);
      formRef.reset();
      this.getProducts();
      this.getUpdatedProduct();
    })
  }

  updateProductQuantity(formRef:any):void{
    this.prodServ.updateProductQuantity({'productID':this.selectedProductID,'newQuantity':formRef.value.productQuantity}).subscribe((res:string)=>{
      console.log(res);
      formRef.reset();
      this.getProducts();
      this.getUpdatedProduct();
    })
  }

  updateProductDiscount(formRef:any):void{
    this.prodServ.updateProductDiscount({'productID':this.selectedProductID,'newDiscount':formRef.value.productDiscount}).subscribe((res:string)=>{
      console.log(res);
      formRef.reset();
      this.getProducts();
      this.getUpdatedProduct();
    })
  }

}
