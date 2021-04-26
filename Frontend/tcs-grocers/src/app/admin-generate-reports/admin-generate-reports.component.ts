import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-generate-reports',
  templateUrl: './admin-generate-reports.component.html',
  styleUrls: ['./admin-generate-reports.component.css']
})
export class AdminGenerateReportsComponent implements OnInit {

  displayBlock:number=0;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  goToDailyReports():void{
    this.displayBlock = 1;
  }

  goToWeeklyReports():void{
    this.displayBlock = 2;
  }
  goToMonthlyReports():void{
    this.displayBlock = 3;
  }
  goToCustomerReports():void{
    this.displayBlock = 4;
  }
  goToProductReports():void{
    this.displayBlock = 5;
  }
}
