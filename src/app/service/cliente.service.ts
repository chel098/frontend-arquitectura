import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string ="http://localhost:8080/client-service";
  constructor(private http: HttpClient) {
  }
  getClientList(){
    const url = `${this.baseUrl}/v1/ClientList`;
    console.log(url);
    return this.http.get<cliente[]>(url);
  }
  getAddClient(newclient: any){
    const url = `${this.baseUrl}/v1/AddClient`;
    console.log(url);
    return this.http.post<cliente>(url,newclient);
  }
  getDeleteClient(CC: number){
    const url = `${this.baseUrl}/v1/DeleteClient/`+CC;
    console.log(url);
    return this.http.delete<string>(url,{responseType:'text' as 'json'});
  }
  getUpdateClient(newclient: any){
    const url = `${this.baseUrl}/v1/ChangeClient`;
    console.log(url);
    return this.http.put<cliente>(url,newclient);
  }
  getClient(CC: number){
    const url = `${this.baseUrl}/v1/FindClient/`+CC;
    console.log(url);
    return this.http.get<cliente>(url);
  }
}
