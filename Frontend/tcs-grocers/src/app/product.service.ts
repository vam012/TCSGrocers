import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  addNewProduct(productRef:any):any{
    return this.http.post('http://localhost:7777/products/storeProductDetails',productRef,{responseType:'text'});
  }
}
