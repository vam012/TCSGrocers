import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  updateMsg?: string;
  
  constructor(public editSer:EmployeeService) { }

  ngOnInit(): void {
  }

  updatePass(passwordRef:any){
    this.editSer.updatePassword(passwordRef.value.id).subscribe((result:string)=>{
      this.updateMsg=result;
    })
  }
}
