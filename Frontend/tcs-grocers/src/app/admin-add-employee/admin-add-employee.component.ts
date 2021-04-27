import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../admin.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {

  msg?: string;

  constructor(public empServ:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }
  addNewEmployee(employeeRef:any):void{
    if(employeeRef.valid){
      this.empServ.storeNewEmployeeDetails(employeeRef.value).subscribe((res:string)=>{
        this.msg =res;
        employeeRef.reset();
    });

    }else{
      this.msg="Please fill in all fields"
    }
    
  }

}
