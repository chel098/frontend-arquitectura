import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-ingresar-cliente',
  templateUrl: './ingresar-cliente.component.html',
  styleUrls: ['./ingresar-cliente.component.css']
})
export class IngresarClienteComponent implements OnInit {
  formCliente: FormGroup
  constructor(private fromBuilder: FormBuilder,
              private clientService:ClienteService,
              private router:Router) 
  {
    this.formCliente = this.fromBuilder.group({
      nombre:[0],
      nit:[0]
    });
   }

  ngOnInit(): void {
  }
  async getcrearCliente(newcliente:any){
    await this.clientService.getAddClient(newcliente).subscribe(value =>{
      this.router.navigate(['/','cliente']);
    })

  }
  saveCliente(){
    const cli:any = this.formCliente.value;
    this.getcrearCliente(cli);
  }
}
