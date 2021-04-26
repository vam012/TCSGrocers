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

  setAllButtonsToSecondary():void{
    let x = document.getElementById("navbar")!.children;
    for(let i=0;i<x.length-2;i++){
      if(i%2==0){
        x[i].children[0].className ="btn btn-secondary";
      }
    }
  }

  goToAddNewProduct(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 1;
    buttonRef.className = "btn btn-primary"
  }
  goToDeleteProduct(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 2;
    buttonRef.className = "btn btn-primary"
  }
  goToUpdateProductInfo(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 3;
    buttonRef.className = "btn btn-primary"
  }
  goToProductRequestPage(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 4;
    buttonRef.className = "btn btn-primary"
  }
  goToAddNewEmployee(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 5;
    buttonRef.className = "btn btn-primary"
  }
  goToDeleteEmployee(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 6;
    buttonRef.className = "btn btn-primary"
  }
  goToGenerateReports(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 7;
    buttonRef.className = "btn btn-primary"
  }
  logoutAdmin():void{
    sessionStorage.removeItem("adminToken");
    this.router.navigate(["admin"])
  }
}
