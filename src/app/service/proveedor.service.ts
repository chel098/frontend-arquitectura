import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private baseUrl:string ="http://localhost:8080";
  constructor(private http: HttpClient) { }
 
  getProvList(){
    const url = `${this.baseUrl}/v1/ProvList`;
    console.log(url);
    return this.http.get<proveedor[]>(url);
  
  }
}
