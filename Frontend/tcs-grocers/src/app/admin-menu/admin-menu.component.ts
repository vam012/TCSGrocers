import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  displayBlock:number=0;
  msg?:string

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  goToAddNewProduct():void{
    this.msg="go to add new product"
    this.displayBlock = 1;
  }
  goToDeleteProduct():void{
    this.msg="go to delete product"
    this.displayBlock = 2;
  }
  goToUpdateProductInfo():void{
    this.msg="go to update product info"
    this.displayBlock = 3;
  }
  goToProductRequestPage():void{
    this.msg="go to product request page"
    this.displayBlock = 4;
  }
  goToAddNewEmployee():void{
    this.msg="go to add new product"
  }
  goToDeleteEmployee():void{
    this.msg="go to delete employee"
  }
  logoutAdmin():void{
    this.msg="logout admin"
  }
  goBackToHomePage():void{
    this.msg="go back to home menu"
  }
}
