import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  toLogin():void{
    console.log("toLogin");

  }
  logout():void{
    console.log("logout");

  }
  toHome():void{
    console.log("toHome")
  }

}
