import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  msg:string=""
  constructor(public router:Router,public custServ:CustomerService) { }

  ngOnInit(): void {
  }

  createNewUser(formRef:any):void{
    if(!formRef.valid){
      this.msg="Please fill in all fields";
    }else{
      this.custServ.createUser(formRef.value).subscribe((res:string)=>{
        this.msg=res;
        if(this.msg=="Data stored successfully"){location.reload()}
      });
    }
  }

}
