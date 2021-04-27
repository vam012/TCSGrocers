import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
  }

  updateProductQuantity(productRef:any){
    console.log(productRef);
    this.productSer.updateProductQuantity(productRef);
  }
}
