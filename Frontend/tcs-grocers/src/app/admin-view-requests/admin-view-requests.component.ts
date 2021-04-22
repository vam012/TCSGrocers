import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {

  msg?:string;
  openOnly:boolean=false;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }


}
