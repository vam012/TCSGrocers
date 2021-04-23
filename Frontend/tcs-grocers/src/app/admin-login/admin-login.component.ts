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
  constructor(public router:Router, /*public adminServ:AdminService*/) { }

  ngOnInit(): void {
  }

  loginAttempt(loginRef:any):void{
    //this.adminServ.login(loginRef).subscribe((res:string)=>this.msg=res,(err:string)=>console.log(err));
  }

}
