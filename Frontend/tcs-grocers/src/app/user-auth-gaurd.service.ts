import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGaurdService {

  constructor(public router:Router) { }
    canActivate(){      //pre-defined methods. 
      let obj = sessionStorage.getItem("userInfo");
      if(obj!=null){
          return true;
      }else {
          this.router.navigate(["user"]);
          return false;
      }
    }
}
