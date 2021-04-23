import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {
  buttonMsg:string = "View Only Open Tickets"
  openOnly:boolean=false;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  openCloseSwitch():void{
    this.openOnly=!this.openOnly;
    this.buttonMsg = (this.openOnly)? "View All Tickets":"View Only Open Tickets";
  }


}
