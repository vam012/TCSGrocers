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
  allOpenOrders?:Array<Order>
  updateMsg: any;
  customerDetails!:Customer;

  constructor(public orderSer:OrderService, public customerServ:CustomerService) { }
  details!:Order;
  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders():void{
    this.orderSer.getAllOrders().subscribe(res=>{this.allOpenOrders=res})
  }

  moveOrderToNextStep(order:Order){
    let nextStep="";
    switch (order.orderStatus) {
      case "Ordered":
        nextStep="Shipped"
        break;
      case "Shipped":
        nextStep="Delivered"
        break;
      default:
        nextStep ="Ordered"
    }
    this.orderSer.updateOrderStatusByID({orderID:order._id,orderStatus:nextStep}).subscribe((res:string)=>{
      this.getAllOrders();
    });
  }
  cancelOrder(order:Order){
    this.customerServ.addFunds(order.customerID,order.orderAmount).subscribe((res:string)=>{
      this.orderSer.deleteOrderByID(order._id).subscribe((res:string)=>{
        this.getAllOrders()
      });
    })
  }
  processRefund(orderRef:any){
    console.log("Inside processRefund");
    this.orderSer.getOrderById(orderRef.value.orderID).subscribe(result=>this.details=result);
    let refund_amount = (this.details?.orderAmount);
    let customerId = this.details?.customerID;
    //this.customerServ.getCustomerById(customerId).subscribe(result=>this.customerDetails=result);
    //let refund:number = (refund_amount);// +  this.customerDetails?.funds;
    //let funds:number = this.customerDetails?.funds;
   // console.log(typeof(refund));
    //console.log(typeof(funds));
    //let updated_amt:number = refund + funds;
    //this.customerServ.refundCustomerById(customerId,updated_amt).subscribe(result=>console.log(result));   
  }

}


