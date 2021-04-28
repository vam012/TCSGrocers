import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {
  updateMsg: any;

  constructor(public orderSer:OrderService) { }

  ngOnInit(): void {
  }

  updateStatus(orderRef:any){
    console.log(orderRef)
    this.orderSer.updateOrderStatusByID(orderRef.value.orderID).subscribe((result:any)=>{
      this.updateMsg=result.Message;
    })
  }
  processRefund(){
    let details = this.orderSer.getOrderById(orderID);
    //let json = JSON.stringify(details);
    let refund = details.orderAmount;
    let funds = this.orderSer.getCustomerById(id).funds;
  }

}


