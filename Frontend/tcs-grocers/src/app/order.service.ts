import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  updateOrderStatusByID(orderID: any,orderStatus:any) {
    
    return this.http.put(`http://localhost:7777/orders/updateOrderStatusByID/${orderID}/${orderStatus}`,{responseType:"text"})
  }

  getOrderById(id:any){
    return this.http.get<Order>(`http://localhost:7777/orders/getOrderById/${id}`);
  }

  getCustomerById(id:any){
    return this.http.get(`http://localhost:7777/orders/getCustomerById/${id}`);
  }


  constructor(public http: HttpClient) { }
}
