import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  msg?:string;
  show:boolean = true;
  constructor(public router:Router, public empServ:EmployeeService) { }

  ngOnInit(): void {
  }

  loginAttempt(loginRef:any):void{
    if(loginRef.valid){
    this.empServ.login(loginRef.value).subscribe((res:string)=>{
      this.msg=res
      if(this.msg == "Login successful and update password"){
        this.show = false;
      }else{
        if(this.msg == "Login successful"){
          sessionStorage.setItem("empToken",loginRef.value.empId);  //This is maximum security
          this.router.navigate(['employeemenu']);
        }
      }
    });
    }else{
      this.msg = "Please fill in all fields"
    }
  }

}
