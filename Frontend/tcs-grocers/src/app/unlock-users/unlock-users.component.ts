import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { SupportTicket } from '../supportticket.model';
import { SupportticketsService } from '../supporttickets.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {
  acctReqs?:Array<SupportTicket>

  constructor(public supportTicketServ:SupportticketsService, public userServ:CustomerService) { }

  ngOnInit(): void {
    this.getReqs()
  }

  getReqs():void{
    this.supportTicketServ.getAllSupportTickets().subscribe(res=>this.acctReqs=res);
  }

  closeTicket(ticketID:any,customerID:any):void{
    console.log(ticketID)
    this.userServ.unlockUser({userID:customerID}).subscribe(
      (res:string)=>{
        this.supportTicketServ.closeTicketByID(ticketID).subscribe((res:string)=>this.getReqs())
      }
    )
  }

}
