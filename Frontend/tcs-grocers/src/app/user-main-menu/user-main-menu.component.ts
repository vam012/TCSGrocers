import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-user-main-menu',
  templateUrl: './user-main-menu.component.html',
  styleUrls: ['./user-main-menu.component.css']
})
export class UserMainMenuComponent implements OnInit {

  msg?:string;
  showUnlock=false;
  showCreate=false;
  constructor(public customerServ:CustomerService,public router:Router) { }

  ngOnInit(): void {
  }
  loginAttempt(loginRef:any){
    if(!loginRef.valid){
      this.msg="Please fill all fields";
      loginRef.reset();
    }
    else{
      this.customerServ.login(loginRef.value).subscribe((res:string)=>{
        this.msg = res;
        if(this.msg=="Login successful"){
          this.customerServ.getCustomerByUsername(loginRef.value.username).subscribe(res=>{
            sessionStorage.setItem("userInfo",(res[0]._id).toString())
          this.router.navigate(['usermenu'])
          })
        }
      })
    }
  }

}
