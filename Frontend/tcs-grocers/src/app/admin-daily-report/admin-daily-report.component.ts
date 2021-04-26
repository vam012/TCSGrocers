import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-daily-report',
  templateUrl: './admin-daily-report.component.html',
  styleUrls: ['./admin-daily-report.component.css']
})
export class AdminDailyReportComponent implements OnInit {

  show:boolean = true;
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  gotoDayReport(dataRef:any){
    this.msg = dataRef;
    this.show = false;
  }

}
