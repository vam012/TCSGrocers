import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { SupportTicket } from '../supportticket.model';
import { SupportticketsService } from '../supporttickets.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-raise-ticket',
  templateUrl: './user-raise-ticket.component.html',
  styleUrls: ['./user-raise-ticket.component.css']
})
export class UserRaiseTicketComponent implements OnInit {

  msg:string="";
  user?:User;
  constructor(public custServ:CustomerService,public supportTicketServ:SupportticketsService) { }

  ngOnInit(): void {
  }

  createRequest(formRef:any){
    if(!formRef.valid){
      this.msg="Please enter a username";
    }{
      this.custServ.getCustomerByUsername(formRef.value.username).subscribe((res=>{
        console.log(res);
        if(res.length==0){
          this.msg="No user exists"
        }else{
          this.user = res[0];
          let userID = this.user._id;
          console.log(userID)
          if(this.user.locked==0){this.msg="Account is not locked";}
          else{
            this.supportTicketServ.getOpenSupportTicketByID(userID).subscribe((res=>{
              if(res.length!=0){this.msg="A support ticket already exists"}
              else{
                this.supportTicketServ.createNewSupportTicket({ customerID:userID,
                                                                reason:"Account is locked"}).subscribe((res:string)=>{
                                                                  this.msg=res;
                                                                  if(this.msg=="Successfully made ticket"){location.reload()}
                                                                })
              }
            }))
          }
        }
      }))
    }
  }
}
