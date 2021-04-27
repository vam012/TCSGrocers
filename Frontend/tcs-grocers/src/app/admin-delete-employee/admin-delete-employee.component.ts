import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-delete-employee',
  templateUrl: './admin-delete-employee.component.html',
  styleUrls: ['./admin-delete-employee.component.css']
})
export class AdminDeleteEmployeeComponent implements OnInit {

  
  msg?: string;

  constructor(public router:Router, public empServ:EmployeeService) { }

  ngOnInit(): void {
  }
  goToAdminMenu():void{
    this.msg = "go back to admin menu"
  }


  deleteEmployee(employeeRef:any):void{
    this.empServ.deleteEmployeeByID(employeeRef.value.employeeId).subscribe((res:string)=>{
      this.msg=res;
      employeeRef.reset();
    });
      
  }


}
