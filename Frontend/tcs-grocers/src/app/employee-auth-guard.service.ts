import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthGuardService {

  constructor(public router:Router) { }
  canActivate(){      //pre-defined methods. 
    let obj = sessionStorage.getItem("empToken");
    if(obj!=null){
        return true;
    }else {
        this.router.navigate(["employee"]);
        return false;
    }
  }
}
