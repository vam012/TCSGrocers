import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  updatePassword(employeeId:any):any{
    return this.http.put(`http://localhost:7777/employee/updatePassword/${employeeId}`,{responseType:"text"})
  }
  
}
