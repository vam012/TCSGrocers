import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  msg?:String
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  loginAttempt(loginRef:any):void{
    this.msg = `username ${loginRef.username}, pwd ${loginRef.password}`;

  }

}
