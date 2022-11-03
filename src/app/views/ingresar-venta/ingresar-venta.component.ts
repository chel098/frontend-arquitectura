import { Component, OnInit } from '@angular/core';
import {venta} from "../../models/Venta";
import {SalesService} from "../../service/sales.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ingresar-venta',
  templateUrl: './ingresar-venta.component.html',
  styleUrls: ['./ingresar-venta.component.css']
})
export class IngresarVentaComponent implements OnInit {
  formVenta: FormGroup;
  constructor(private fromBuilder: FormBuilder,
              private salesService:SalesService,
              private router: Router)
  {
    this.formVenta = this.fromBuilder.group({
      fecha: [0],
      cantidad: [''],
      precio_Total: [''],
      producto_CPD: [''],
      cliente_CC:['']
    });
  }

  ngOnInit() {
  }

  async getcrearVenta(newventa:any) {
    await this.salesService.getAddSales(newventa).subscribe(value => {
      this.router.navigate(['/','venta']);
      //console.log("hola como eta"+value[1].cv);
    });
  }
  saveVenta(){
    const ven:any = this.formVenta.value;
    this.getcrearVenta(ven);
  }
}
