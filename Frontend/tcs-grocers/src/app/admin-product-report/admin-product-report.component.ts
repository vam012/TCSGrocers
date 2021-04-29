import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-product-report',
  templateUrl: './admin-product-report.component.html',
  styleUrls: ['./admin-product-report.component.css']
})
export class AdminProductReportComponent implements OnInit {

  show:boolean = true;
  msg?:string;
  reportdata?:Product[];
  constructor(public router:Router, public prodServ:ProductService) { }

  ngOnInit(): void {
  }
  
  gotoProductReport(dateRef:any){
    this.prodServ.getProductByID(dateRef.value.productID).subscribe(res=>this.reportdata=res);
    this.show = false;
    dateRef.reset();
  }


}
