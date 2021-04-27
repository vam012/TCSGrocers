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
  allProducts?:Array<Product>;
  selectedProductID?:any;
  productPriceErrMsg?:string;
  productDiscountErrMsg?:string;
  productQuantityErrMsg?: string;
  constructor(public router:Router,public prodServ:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.prodServ.getAllProducts().subscribe(res=>this.allProducts=res)
  }

  updateProductID(formRef:any):void{
    this.prodServ.getProductByID(formRef.value.productID).subscribe(res=>{this.selectedProductID = res[0]._id;this.product=res[0]});
  }

  getUpdatedProduct():void{
    this.prodServ.getProductByID(this.selectedProductID).subscribe(res=>{this.selectedProductID = res[0]._id;this.product=res[0]});
  }

  updateProductName(formRef:any):void{
    this.prodServ.updateProductName({'productID':this.selectedProductID,'newName':formRef.value.productName}).subscribe((res:string)=>{
      formRef.reset();
      this.getProducts();
      this.getUpdatedProduct();
    })
    
  }

  updateProductPrice(formRef:any):void{
    if(formRef.value.productPrice > 0){
      this.prodServ.updateProductPrice({'productID':this.selectedProductID,'newPrice':formRef.value.productPrice}).subscribe((res:string)=>{
        formRef.reset();
        this.productPriceErrMsg = ""
        this.getProducts();
        this.getUpdatedProduct();
      })
    }else{
      this.productPriceErrMsg = "Please input a postive price!"
    }
  }

  updateProductQuantity(formRef:any):void{
    if(formRef.value.productQuantity>0){
      this.prodServ.updateProductQuantity({'productID':this.selectedProductID,'newQuantity':formRef.value.productQuantity}).subscribe((res:string)=>{
        formRef.reset();
        this.productQuantityErrMsg = ""
        this.getProducts();
        this.getUpdatedProduct();
    })
    }else{
      this.productQuantityErrMsg = "Please input a positive product quantity!"
    }
  }

  updateProductDiscount(formRef:any):void{
    if(formRef.value.productDiscount>0 && formRef.value.productDiscount <100){
    this.prodServ.updateProductDiscount({'productID':this.selectedProductID,'newDiscount':formRef.value.productDiscount}).subscribe((res:string)=>{
      this.productDiscountErrMsg = ""
      formRef.reset();
      this.getProducts();
      this.getUpdatedProduct();
    })
    }else{
      this.productDiscountErrMsg = "Discount cannot be less that 0% or more than 100%"
    }
  }

}
