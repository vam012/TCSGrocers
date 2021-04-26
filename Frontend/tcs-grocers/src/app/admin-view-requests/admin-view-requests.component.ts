import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRequest } from '../productrequests.model';
import { ProductrequestsService } from '../productrequests.service';

@Component({
  selector: 'app-admin-view-requests',
  templateUrl: './admin-view-requests.component.html',
  styleUrls: ['./admin-view-requests.component.css']
})
export class AdminViewRequestsComponent implements OnInit {
  openOnly:boolean=true;
  buttonMsg:string = (this.openOnly)? "View All Tickets":"View Only Open Tickets";
  productReqs?:Array<ProductRequest>
  constructor(public router:Router, public prodReqServ:ProductrequestsService) { }

  ngOnInit(): void {
    this.getAllRequests()
  }

  openCloseSwitch():void{
    this.openOnly=!this.openOnly;
    this.buttonMsg = (this.openOnly)? "View All Tickets":"View Only Open Tickets";
  }

  getAllRequests():void{
    this.prodReqServ.getAllProductRequests().subscribe(res=>this.productReqs=res);
  }

  closeTicket(ticketID:number):void{
    this.prodReqServ.closeProductRequestByID(ticketID).subscribe((res:string)=>{this.getAllRequests();})
  }
  openTicket(ticketID:number):void{
    this.prodReqServ.openeProductRequestByID(ticketID).subscribe((res:string)=>{this.getAllRequests();})
  }


}
