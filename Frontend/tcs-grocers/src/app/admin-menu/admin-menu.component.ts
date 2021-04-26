import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  displayBlock:number=0;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  goToAddNewProduct():void{
    this.displayBlock = 1;
  }
  goToDeleteProduct():void{
    this.displayBlock = 2;
  }
  goToUpdateProductInfo():void{
    this.displayBlock = 3;
  }
  goToProductRequestPage():void{
    this.displayBlock = 4;
  }
  goToAddNewEmployee():void{
    this.displayBlock = 5;
  }
  goToDeleteEmployee():void{
    this.displayBlock = 6;
  }
  goToGenerateReports():void{
    this.displayBlock = 7;
  }
  logoutAdmin():void{
    sessionStorage.removeItem("adminToken");
    this.router.navigate(["admin"])
  }
}
