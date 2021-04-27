import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Report } from '../report.model';

@Component({
  selector: 'app-admin-daily-report',
  templateUrl: './admin-daily-report.component.html',
  styleUrls: ['./admin-daily-report.component.css']
})
export class AdminDailyReportComponent implements OnInit {

  show:boolean = true;
  msg?:string;
  reportdata?:Report[]
  constructor(public router:Router, public orderServ:OrderService) { }

  ngOnInit(): void {
  }

  gotoDayReport(dateRef:any):void{
    this.orderServ.getOrderByDay(dateRef.value.date).subscribe(res=>this.reportdata=res);
    console.log(this.reportdata)
    this.show = false;
  };

}
