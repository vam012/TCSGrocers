import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-customer-report',
  templateUrl: './admin-customer-report.component.html',
  styleUrls: ['./admin-customer-report.component.css']
})
export class AdminCustomerReportComponent implements OnInit {


  
  show:boolean = true;
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  gotoCustomerReport(dataRef:any){
    this.msg = dataRef;
    this.show = false;
  }

}
