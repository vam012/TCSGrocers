import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Report } from './report.model';
import { Weekreport } from './weekreport.model';

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



  constructor(public http:HttpClient) { }

  getOrderByDay(date:any):Observable<Report[]>{
    return this.http.get<Report[]>(`http://localhost:7777/orders/getDailyData/${date}`)
  }
  getOrderByMonth(date:any):Observable<Report[]>{
    return this.http.get<Report[]>(`http://localhost:7777/orders/getMonthlyData/${date}`)
  }

  getOrderByWeek(startDate:any,endDate:any):Observable<Weekreport[]>{
    return this.http.get<Weekreport[]>(`http://localhost:7777/orders/getWeeklyData/${startDate}/${endDate}`)
  }


  getOrderReportByCustomerId(customerId:any):Observable<Order[]>{
    return this.http.get<Order[]>(`http://localhost:7777/orders/getOrderReportByCustomerId/${customerId}`)

  }
}
