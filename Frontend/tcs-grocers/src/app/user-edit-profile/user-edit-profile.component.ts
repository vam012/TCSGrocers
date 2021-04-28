import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  userID?:String;
  user:User = new User(-1,'','','','','','','',-1,0,0);
  hold:any="";
  panelToShow?:Number;
  msg:string="";
  firstName="";
  lastName="";
  phoneNumber="";
  email="";

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
      this.lastName=this.user.lName;
      this.firstName=this.user.fName;
      this.phoneNumber=this.user.phoneNumber;
      this.email=this.user.email;
    });
  }

  changePanel(panelToShow:number):void{
    this.panelToShow = panelToShow;
    this.msg="";
  }

  updateFirstName(formRef:any){
    this.userServ.updateName(this.userID,formRef.value.fName,this.user.lName).subscribe((res:string)=>{
      this.msg = res;
        this.updateInfo();
        formRef.reset();
    })
  }
  updateLastName(formRef:any){
    this.userServ.updateName(this.userID,this.user.fName,formRef.value.lName).subscribe((res:string)=>{
      this.msg = res;
        this.updateInfo();
        formRef.reset();
    })
  }
  updatePhoneNumber(formRef:any){
    this.userServ.updatePhoneNumber(this.userID,formRef.value.phoneNumber).subscribe((res:string)=>{
      this.msg = res;
        this.updateInfo();
        formRef.reset();
    })
  }
  updateEmail(formRef:any){
    this.userServ.updateEmail(this.userID,formRef.value.email).subscribe((res:string)=>{
      this.msg = res;
        this.updateInfo();
        formRef.reset();
    })
  }
  updatePassword(formRef:any){
    if(formRef.value.password == formRef.value.passwordAgain){
      this.userServ.updatePassword(this.userID,formRef.value.password).subscribe((res:string)=>{
        this.msg = res;
        this.updateInfo();
        formRef.reset();
      })
    }else{
      this.msg="Passwords do not match";
      formRef.reset()
    }
  }
  updateInfo() {
    this.userServ.getCustomerById(this.userID).subscribe(res=>{
      this.user=res[0];
      this.lastName=this.user.lName;
      this.firstName=this.user.fName;
      this.phoneNumber=this.user.phoneNumber;
      this.email=this.user.email;
    });
  }
}
