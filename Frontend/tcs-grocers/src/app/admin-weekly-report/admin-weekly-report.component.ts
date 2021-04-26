import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-weekly-report',
  templateUrl: './admin-weekly-report.component.html',
  styleUrls: ['./admin-weekly-report.component.css']
})
export class AdminWeeklyReportComponent implements OnInit {

  
  show:boolean = true;
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  gotoWeekReport(dataRef:any){
    this.msg = dataRef;
    console.log(dataRef)
    this.show = false;
  }
}
