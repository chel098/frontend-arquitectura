import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  gecliente:cliente[] = [];
  formCliente:FormGroup;
  id:any = 0;
  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private fromBuilder: FormBuilder
  ) { 
    this.formCliente = this.fromBuilder.group({
      nombre:[0],
      nit:[0]
    })
  }
  async ngOnInit(): Promise <void> {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    await this.GetCliente(this.id);
    console.log(this.gecliente);
  }
  async GetCliente(CC:any){
    this.clienteService.getClient(CC).subscribe((value) => {
      this.gecliente[0] = value;
      this.formCliente.setValue({
        nombre:this.gecliente[0].nombre,
        nit:this.gecliente[0].nit
      })
    })
  }

  update(){
    let actualizar = this.formCliente.value;
    actualizar.cc=parseInt(this.id)
    console.log(actualizar)
    this.clienteService.getUpdateClient(actualizar).subscribe(data=>{console.log('ACTUALIZADO')});
  }

}
