import { Injectable } from '@angular/core';
import {venta} from "../models/Venta";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private baseUrl:string ="http://localhost:8080";
  constructor(private http: HttpClient) {
  }
  getSalesList(){
    const url = `${this.baseUrl}/v1/SalesList`;
    console.log(url);
    return this.http.get<venta[]>(url);
  }
  getAddSales(newventa: any){
    const url = `${this.baseUrl}/v1/AddSale`;
    console.log(url);
    return this.http.post<venta>(url,newventa);
  }
  getDeleteSales(CV: number){
    const url = `${this.baseUrl}/v1/DeleteSale/`+CV;
    console.log(url);
    return this.http.delete<string>(url);
  }
  getUpdateSales(newventa: any){
    const url = `${this.baseUrl}/v1/ChangeSale`;
    console.log(url);
    return this.http.put<venta>(url,newventa);
  }
  getVenta(CV: number){
    const url = `${this.baseUrl}/v1/FindSale/`+CV;
    console.log(url);
    return this.http.get<venta>(url);
  }

}
