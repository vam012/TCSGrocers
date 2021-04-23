import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {

  msg?:string;
  buttonMsg:string = "Show open tickets only"
  openOnly:boolean=false;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }

  openCloseSwitch():void{
    this.openOnly=!this.openOnly;
    this.buttonMsg = (this.openOnly)? "View All Tickets":"View Only Open Tickets";
  }


}
