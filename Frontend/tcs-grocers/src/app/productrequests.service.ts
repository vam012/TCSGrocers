import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRequest } from './productrequests.model';

@Injectable({
  providedIn: 'root'
})
export class ProductrequestsService {

  constructor(public http:HttpClient) { }

  getAllProductRequests():Observable<ProductRequest[]>{
    return this.http.get<ProductRequest[]>(`http://localhost:7777/productrequests/getAllProductRequests`)
  }

  closeProductRequestByID(requestID:any):any{
    return this.http.put(`http://localhost:7777/productrequests/closeProductRequestByID`,{'requestID':requestID,'newStatus':1},{responseType:'text'});
  }

  openeProductRequestByID(requestID:any):any{
    return this.http.put(`http://localhost:7777/productrequests/closeProductRequestByID`,{'requestID':requestID,'newStatus':0},{responseType:'text'});
  }
}
