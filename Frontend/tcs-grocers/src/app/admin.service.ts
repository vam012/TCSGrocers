import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  login(loginRef:any):any{
    return this.http.post("http://localhost:7777/admins/login",loginRef,{responseType: 'text'})
  }
}
