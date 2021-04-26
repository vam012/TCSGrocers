import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  addNewProduct(productRef:any):any{
    return this.http.post('http://localhost:7777/products/storeProductDetails',productRef,{responseType:'text'});
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:7777/products/allProductDetails/");
  }

  deleteProductByID(productID:any):any{
    return this.http.delete(`http://localhost:7777/products/deleteProductById/${productID}`,{responseType:'text'})
  }
}
