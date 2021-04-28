import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {
  updateMsg: any;
  customerDetails?:Customer;

  constructor(public orderSer:OrderService, public customerServ:CustomerService) { }
  details?:Order;
  ngOnInit(): void {
  }

  updateStatus(orderRef:any){
    console.log(orderRef)
    if(orderRef.value.newOrderStatus=='Cancelled'){
      this.processRefund(orderRef)
    }
    this.orderSer.updateOrderStatusByID(orderRef.value.orderID,orderRef.value.newOrderStatus).subscribe((result:any)=>{
      this.updateMsg=result.Message;
    })

  }
  processRefund(orderRef:any){
    console.log("Inside processRefund");
    this.orderSer.getOrderById(orderRef.value.orderID).subscribe(result=>this.details=result);
    let refund_amount = (this.details?.orderAmount);
    let customerId = this.details?.customerID;
    this.customerServ.getCustomerById(customerId).subscribe(result=>this.customerDetails=result);
    let refund = (refund_amount);// +  this.customerDetails?.funds;
    let funds = this.customerDetails?.funds;
   // console.log(typeof(refund));
    //console.log(typeof(funds));
    let updated_amt:Number = refund + funds;
    this.customerServ.refundCustomerById(customerId,updated_amt).subscribe(result=>console.log(result));   
  }

}


