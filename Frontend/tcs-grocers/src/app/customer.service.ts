import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
//import { Customer } from './model/model.customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  addFunds(id:any,funds:any):any {
    return this.http.put(`http://localhost:7777/customers/addFunds`,{customerID:id,fundsToAdd:funds},{responseType:'text'})
  }
  
  constructor(public http: HttpClient) { }

  unlockUser(id:any):any{
    return this.http.put(`http://localhost:7777/customers/unlockUser/${id}`,{responseType:"text"});
  }

  getCustomerById(id:any):Observable<User[]>{
    return this.http.get<User[]>("http://localhost:7777/customers/getCustomerById/"+id);
  }

  

}
