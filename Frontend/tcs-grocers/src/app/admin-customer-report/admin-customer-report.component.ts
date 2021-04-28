import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin-customer-report',
  templateUrl: './admin-customer-report.component.html',
  styleUrls: ['./admin-customer-report.component.css']
})
export class AdminCustomerReportComponent implements OnInit {


  
  show:boolean = true;
  msg?:string;
  reportdata?:Order[];
  constructor(public router:Router, public orderServ:OrderService) { }

  ngOnInit(): void {
  }

  gotoCustomerReport(dateRef:any){
    this.orderServ.getOrderReportByCustomerId(dateRef.value.customerID).subscribe(res=>this.reportdata=res);
    console.log(this.reportdata)
    this.show = false;
  }
  
}
