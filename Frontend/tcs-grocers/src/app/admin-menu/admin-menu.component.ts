import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  msg?:string

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  goToAddNewProduct():void{
    this.msg="go to add new product"
  }
  goToUpdateProductInfo():void{
    this.msg="go to update product info"
  }
  goToDeleteProduct():void{
    this.msg="go to delete product"
  }
  goToProductRequestPage():void{
    this.msg="go to product request page"
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
