import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  updateOrderStatusByID(orderID: any) {
    return this.http.put(`http://localhost:7777/orders/updateOrderStatusByID/${orderID}`,{responseType:"text"})
  }

  getOrderById(id:any){
    return this.http.get(`http://localhost:7777/orders/getOrderById/${id}`,{responseType:"text"})
  }

  getCustomerById(id:any){
    return this.http.get(`http://localhost:7777/orders/getCustomerById/${id}`,{responseType:"text"});
  }

  constructor(public http: HttpClient) { }
}
