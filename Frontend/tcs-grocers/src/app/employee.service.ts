import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  updatePassword(employeeId:any):any{
    return this.http.put(`http://localhost:7777/employee/updatePassword/${employeeId}`,{responseType:"text"})
  }
  

  storeNewEmployeeDetails(employeeRef:any):any{

    return this.http.post("http://localhost:7777/employees/createNewEmployee",employeeRef,{responseType:"text"});
  }


  deleteEmployeeByID(employeeId:any):any{
    return this.http.delete(`http://localhost:7777/employees/deleteEmployeeById/${employeeId}`,{responseType:'text'})
    
  }
}
