import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { Report } from './report.model';
import { Weekreport } from './weekreport.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:7777/orders//getAllOrderDetails')
  }
  updateOrderStatusByID(orderRef:any) {
    
    return this.http.put(`http://localhost:7777/orders/updateOrderStatusByID/`,orderRef,{responseType:"text"})
  }

  getOrderById(id:any){
    return this.http.get<Order>(`http://localhost:7777/orders/getOrderById/${id}`);
  }

  getCustomerById(id:any){
    return this.http.get(`http://localhost:7777/orders/getCustomerById/${id}`);
  }

  deleteOrderByID(id:any):any{
    return this.http.delete(`http://localhost:7777/orders/deleteOrderByID/${id}`,{responseType:'text'});
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
