import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  getOrderByDay(date:any):Observable<Report[]>{
    return this.http.get<Report[]>(`http://localhost:7777/orders/getDailyData/${date}`)
  }


}
