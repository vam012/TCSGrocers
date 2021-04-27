import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {
  userMsg?: string;

  constructor(public detailSer:CustomerService, public userSer:CustomerService) { }

  ngOnInit(): void {
  }



  unlockUser(userRef:any):void{
    console.log(userRef);
    this.userSer.unlockUser(userRef.value.id).subscribe((result:string)=>{
      this.userMsg=result;
    })
  }

}
