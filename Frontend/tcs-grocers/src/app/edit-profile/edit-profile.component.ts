import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  updateMsg?: string;
  
  constructor(public editSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  updatePassword(passwordRef:any){

      this.editSer.updatePassword(passwordRef.value).subscribe((result:string)=>{
      this.updateMsg=result;
      passwordRef.reset();
      sessionStorage.removeItem("empToken");
      this.router.navigate(["employee"])
      })
  }
}
