import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {producto} from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl:string ="http://localhost:8080";
  constructor(private http: HttpClient) { }
}
getProductList(){
  const url = `${this.baseUrl}/v1/ProductList`;
  console.log(url);
  return this.http.get<producto[]>(url);
}


