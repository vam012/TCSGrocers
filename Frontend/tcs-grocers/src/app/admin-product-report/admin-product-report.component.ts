import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-report',
  templateUrl: './admin-product-report.component.html',
  styleUrls: ['./admin-product-report.component.css']
})
export class AdminProductReportComponent implements OnInit {

  show:boolean = true;
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  
  gotoProductReport(dataRef:any){
    this.msg = dataRef;
    this.show = false;
  }

  
}
