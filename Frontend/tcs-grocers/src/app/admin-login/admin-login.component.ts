import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  msg?:String
  constructor(public router:Router, public adminServ:AdminService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("adminToken")=="adminToken"){
      this.router.navigate(['adminmenu']);
    }
  }

  loginAttempt(loginRef:any):void{
    if(loginRef.valid){
    this.adminServ.login(loginRef.value).subscribe((res:string)=>{
      this.msg=res
      if(this.msg == "Login successful"){
        sessionStorage.setItem("adminToken","adminToken");  //This is maximum security
        this.router.navigate(['adminmenu']);
      }});
    }else{
      this.msg = "Please fill in all fields"
    }
  }

}
