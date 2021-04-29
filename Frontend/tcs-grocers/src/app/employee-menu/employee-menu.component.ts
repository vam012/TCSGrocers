import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.css']
})
export class EmployeeMenuComponent implements OnInit {
  displayBlock:number=0;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  setAllButtonsSecondary():void {
    let x = document.getElementById("navbar")!.children;
    for(let i=0;i<x.length-2;i++){
      if(i%2==0){
        x[i].children[0].className ="btn btn-secondary";
      }
    }
  }

  goToSendRequest(buttonRef:any):void{
    this.setAllButtonsSecondary()
    this.displayBlock = 1;
    buttonRef.className = "btn btn-primary"
  }
  goToOrderStatus(buttonRef:any):void{
    this.setAllButtonsSecondary()
    this.displayBlock = 2;
    buttonRef.className = "btn btn-primary"
  }
  goToUnlockUsers(buttonRef:any):void{
    this.setAllButtonsSecondary()
    this.displayBlock = 3;
    buttonRef.className = "btn btn-primary"
  }
  goToEditProfile(buttonRef:any):void{
    this.setAllButtonsSecondary()
    this.displayBlock = 4;
    buttonRef.className = "btn btn-primary"
  }
  logoutEmployee(){
      sessionStorage.removeItem("empToken");
      this.router.navigate(["employee"])
    }
  }

