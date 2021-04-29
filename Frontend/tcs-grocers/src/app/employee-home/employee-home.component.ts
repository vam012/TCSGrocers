import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logout():void{
    sessionStorage.removeItem("empToken");
    this.router.navigate(["employee"])

  }
}
