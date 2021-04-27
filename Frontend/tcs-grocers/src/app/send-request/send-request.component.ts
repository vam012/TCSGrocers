import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  constructor(public productSer:RequestService) { }

  ngOnInit(): void {
  }

  addProductQuantity(productRef:any){
    console.log(productRef);
    this.productSer.sendRequest(productRef);
  }
}
