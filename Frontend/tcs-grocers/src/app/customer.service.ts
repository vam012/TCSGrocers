import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Customer } from './model/model.customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(public http: HttpClient) { }

  unlockUser(id:any):any{
    return this.http.put(`http://localhost:7777/customers/unlockUser/${id}`,{responseType:"text"});
  }

/*  getCustomerById(id:any):any{
    return this.http.get("http://localhost:7777/customer/getCustomerById/"+id);
  }

  */

}
