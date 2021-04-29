import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  addNewOrder(orderRef:any):any{
    return this.http.post('http://localhost:7777/orders/storeNewOrder',orderRef,{responseType:'text'});
  }
}
