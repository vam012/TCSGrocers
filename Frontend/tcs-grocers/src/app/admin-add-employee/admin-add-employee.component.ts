import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {

  msg?: string;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }


  addNewEmployee(employeeRef:any):void{
    this.msg = `Employee Firstname: ${employeeRef.employeeFirstName}, Employee Last Name: ${employeeRef.employeeLastName}, Employee Email Id: ${employeeRef.employeeEmailId}`
  }

}
