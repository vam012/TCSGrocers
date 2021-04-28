import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Report } from '../report.model';

@Component({
  selector: 'app-admin-monthly-report',
  templateUrl: './admin-monthly-report.component.html',
  styleUrls: ['./admin-monthly-report.component.css']
})
export class AdminMonthlyReportComponent implements OnInit {


  show:boolean = true;
  msg?:string;
  reportdata?:Report[]
  constructor(public router:Router, public orderServ:OrderService) { }

  ngOnInit(): void {
  }

  gotoMonthReport(dateRef:any){
    this.orderServ.getOrderByMonth(dateRef.value.date).subscribe(res=>this.reportdata=res);
    this.show = false;
    dateRef.reset();
  }


}
