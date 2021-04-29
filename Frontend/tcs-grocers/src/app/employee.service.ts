import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  login(loginRef:any):any{
    return this.http.post("http://localhost:7777/employees/login",loginRef,{responseType: 'text'})
  }

  updatePassword(passwordRef:any):any{
    return this.http.put("http://localhost:7777/employees/updatePassword/",passwordRef,{responseType:"text"})
  }
  

  storeNewEmployeeDetails(employeeRef:any):any{

    return this.http.post("http://localhost:7777/employees/createNewEmployee",employeeRef,{responseType:"text"});
  }


  deleteEmployeeByID(employeeId:any):any{
    return this.http.delete(`http://localhost:7777/employees/deleteEmployeeById/${employeeId}`,{responseType:'text'})
    
  }
}
