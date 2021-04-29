import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductrequestsService } from '../productrequests.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  allProducts?:Array<Product>
  msg?:string;
  empID?:String;
  hold:any="";

  constructor(public prodReqsServ:ProductrequestsService, public prodServ:ProductService) { }

  ngOnInit(): void {
    this.getProducts();

    this.hold= sessionStorage.getItem("empToken")
    if(this.hold==null){
      this.empID = "-1"
    }else if (this.hold!=null){
      let userInfo = JSON.parse(this.hold);
      this.empID = userInfo;
    }
  }

  getProducts():void{
    this.prodServ.getAllProducts().subscribe(res=>this.allProducts=res)
  }


  createTicket(productRef:any){
    if(!productRef.valid){
      this.msg="Please fill in all fields"
    }else{
      this.prodReqsServ.createNewProductRequest({
        empID:this.empID,
        prodID:productRef.value.productID,
        requestType:productRef.value.requestType
      }).subscribe((res:string)=>{this.msg=res;productRef.reset()})
    }
  }
}
