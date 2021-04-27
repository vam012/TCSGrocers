import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }


  storeNewEmployeeDetails(employeeRef:any):any{

    return this.http.post("http://localhost:7777/employees/createNewEmployee",employeeRef,{responseType:"text"});
  }

}
