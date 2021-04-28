import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(public http: HttpClient) { }

  unlockUser(id:any):any{
    return this.http.put(`http://localhost:7777/customers/unlockUser/${id}`,{responseType:"text"});
  }

  getCustomerById(id:any):Observable<Customer>{
    return this.http.get<Customer>(`http://localhost:7777/customer/getCustomerById/${id}`);
  }

  
  refundCustomerById(customerId:any,refundAmount:any){
    return this.http.put(`http://localhost:7777/customers/refundCustomerById/${customerId}/${refundAmount}`,{responseType:"text"});
  }



}
