import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {producto} from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl:string ="http://localhost:8080/product-service";
  constructor(private http: HttpClient) { 

  }
  getProductList(){
      const url = `${this.baseUrl}/v1/ProductList`;
      console.log(url);
      return this.http.get<producto[]>(url);
    }
  getAddProduct(newproduct:any){
    const url = `${this.baseUrl}/v1/AddProduct`;
    console.log(url);
    return this.http.post<producto>(url,newproduct);
  
  }
  getDeleteProduct(CPD:number){
    const url = `${this.baseUrl}/v1/DeleteProduct/`+CPD;
    console.log(url);
    return this.http.delete<string>(url);
  
  }
  getUpdateProduct(newproduct:any){
    const url = `${this.baseUrl}/v1/ChangeProduct`;
    console.log(url);
    return this.http.put<producto>(url,newproduct);
  
  }
  getProducto(CPD:number){
    const url = `${this.baseUrl}/v1/FindProduct/`+CPD;
    console.log(url);
    return this.http.get<producto>(url);
   
  }
}


