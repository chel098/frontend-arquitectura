import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  listcliente: cliente[]=[];
  constructor(private clienteService:ClienteService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.getListCliente();
  }

  async getListCliente(){
    await this.clienteService.getClientList().subscribe(value =>{
      this.listcliente=value;
    });
  }
  delete(id:number){
    this.clienteService.getDeleteClient(id).subscribe(value =>{
      console.log(value)
    })
  }

}
