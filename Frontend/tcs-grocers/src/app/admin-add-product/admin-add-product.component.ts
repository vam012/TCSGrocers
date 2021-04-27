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
    if(productRef.valid){
      if(productRef.value.price > 0){
        if(productRef.value.quantity > 0){
          this.prodServ.addNewProduct(productRef.value).subscribe((res:string)=>{
            this.msg=res;
            productRef.reset()})
        }else{
          this.msg="Product quantity cannot be negative"
        }
      }else{
        this.msg="Product price cannot be negative"
      }
    }else{
      this.msg="Please fill in all fields"
    }
  }

}
