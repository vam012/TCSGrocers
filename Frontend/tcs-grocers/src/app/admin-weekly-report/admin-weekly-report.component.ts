import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Weekreport } from '../weekreport.model';

@Component({
  selector: 'app-admin-weekly-report',
  templateUrl: './admin-weekly-report.component.html',
  styleUrls: ['./admin-weekly-report.component.css']
})
export class AdminWeeklyReportComponent implements OnInit {

  
  show:boolean = true;
  msg?:string;
  reportdata?:Weekreport[]
  constructor(public router:Router, public orderServ:OrderService) { }

  ngOnInit(): void {
  }
  gotoWeekReport(dateRef:any){
    this.orderServ.getOrderByWeek(dateRef.value.startDate,dateRef.value.endDate).subscribe(res=>this.reportdata=res);
    this.show = false;
    dateRef.reset();
  }
}
