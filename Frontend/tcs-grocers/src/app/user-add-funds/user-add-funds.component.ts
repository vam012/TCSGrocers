import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-add-funds',
  templateUrl: './user-add-funds.component.html',
  styleUrls: ['./user-add-funds.component.css']
})
export class UserAddFundsComponent implements OnInit {
  userID?:String;
  user?:User;
  funds?:any;
  hold:any="";
  msg?:string;

  constructor(public userServ:CustomerService) { }

  ngOnInit(): void {
    this.hold= sessionStorage.getItem("")
    if(this.hold==null){
      this.userID = "100"
    }else if (this.hold!=null){
      let userInfo = JSON.parse(this.hold);
      this.userID = userInfo.userID;
    }
    this.userServ.getCustomerById(this.userID).subscribe(res=>{
      this.user=res[0];
      this.funds = this.user.funds;
    });
  }

  updateUserFunds():void {
    this.userServ.getCustomerById(this.userID).subscribe(res=>{
      this.user=res[0];
      this.funds = this.user.funds;
    });
  }

  addFunds(formRef:any){
    this.userServ.addFunds(this.userID,formRef.value.funds).subscribe((res:string)=>{
      this.msg = res;
      formRef.reset();
      this.updateUserFunds();
    });
  }

}
