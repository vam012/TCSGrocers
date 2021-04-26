import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService {

  constructor(public router:Router) { }
    canActivate(){      //pre-defined methods. 
      let obj = sessionStorage.getItem("adminToken");
      if(obj!=null){
          return true;
      }else {
          this.router.navigate(["admin"]);
          return false;
      }
    }

}
