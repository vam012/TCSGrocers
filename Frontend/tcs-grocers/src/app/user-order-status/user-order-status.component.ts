import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {
  allUserOrders?:Array<Order>;
  userID?:String;
  user?:User;
  hold:any="";

  constructor(public orderServ:OrderService,public userServ:CustomerService) { }

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
      this.orderServ.getOrderReportByCustomerId(this.userID).subscribe(res=>this.allUserOrders=res)
    });
  }

}
