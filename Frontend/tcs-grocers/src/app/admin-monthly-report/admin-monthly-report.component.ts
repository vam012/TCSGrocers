import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-monthly-report',
  templateUrl: './admin-monthly-report.component.html',
  styleUrls: ['./admin-monthly-report.component.css']
})
export class AdminMonthlyReportComponent implements OnInit {


  show:boolean = true;
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  gotoMonthReport(dataRef:any){
    this.msg = dataRef;
    this.show = false;
  }


}
