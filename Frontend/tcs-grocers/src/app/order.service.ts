import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from './report.model';
import { Weekreport } from './weekreport.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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


  

}
