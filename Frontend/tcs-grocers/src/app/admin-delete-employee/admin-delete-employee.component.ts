import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-delete-employee',
  templateUrl: './admin-delete-employee.component.html',
  styleUrls: ['./admin-delete-employee.component.css']
})
export class AdminDeleteEmployeeComponent implements OnInit {

  
  msg?: string;


  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }


  deleteEmployee(employeeRef:any):void{
    this.msg = `Employee Id: ${employeeRef.employeeId}`
  }

}
