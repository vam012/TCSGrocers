import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

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

  goToCart(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 1;
    buttonRef.className = "btn btn-primary"
  }
  goToOrderStatus(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 2;
    buttonRef.className = "btn btn-primary"
  }
  goToEditProfile(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 3;
    buttonRef.className = "btn btn-primary"
  }
  goToAddFunds(buttonRef:any):void{
    this.setAllButtonsToSecondary()
    this.displayBlock = 4;
    buttonRef.className = "btn btn-primary"
  }
  logoutUser():void{
    sessionStorage.removeItem("userInfo");
    this.router.navigate(["user"])
  }

}
