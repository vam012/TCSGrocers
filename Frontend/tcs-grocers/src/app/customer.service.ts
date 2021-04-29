import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  updateName(userID: any, fName: any,lName:any):any {
    return this.http.put(`http://localhost:7777/customers/updateName`,{customerID:userID,fName:fName,lName:lName},{responseType:'text'})
  }
  updatePassword(userID: any, password: any):any {
    return this.http.put(`http://localhost:7777/customers/updatePassword`,{customerID:userID,password:password},{responseType:'text'})
  }
  updatePhoneNumber(userID: any, phoneNumber: any):any {
    return this.http.put(`http://localhost:7777/customers/updatePhoneNumber`,{customerID:userID,phoneNumber:phoneNumber},{responseType:'text'})
  }
  updateEmail(userID: any, email: any):any {
    return this.http.put(`http://localhost:7777/customers/updateEmail`,{customerID:userID,email:email},{responseType:'text'})
  }


  addFunds(id:any,funds:any):any {
    return this.http.put(`http://localhost:7777/customers/addFunds`,{customerID:id,fundsToAdd:funds},{responseType:'text'})
  }
  
  constructor(public http: HttpClient) { }

  unlockUser(id:any):any{
    return this.http.put(`http://localhost:7777/customers/unlockUser/${id}`,{responseType:"text"});
  }

  
  refundCustomerById(customerId:any,refundAmount:any){
    return this.http.put(`http://localhost:7777/customers/refundCustomerById/${customerId}/${refundAmount}`,{responseType:"text"});
  }

  getCustomerById(id:any):Observable<User[]>{
    return this.http.get<User[]>("http://localhost:7777/customers/getCustomerById/"+id);
  }

  getCustomerByUsername(username:any):Observable<User[]>{
    return this.http.get<User[]>("http://localhost:7777/customers/getCustomerByUsername/"+username);
  }

  createUser(form:any):any{
    return this.http.post("http://localhost:7777/customers/createNewCustomer",form,{responseType:'text'})
  }

  login(form:any):any{
    return this.http.post("http://localhost:7777/customers/login",form,{responseType:'text'})
  }

 

}
