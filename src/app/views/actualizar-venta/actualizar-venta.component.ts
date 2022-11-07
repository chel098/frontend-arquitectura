import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { venta } from '../../models/Venta';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-actualizar-venta',
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.css'],
})
export class ActualizarVentaComponent implements OnInit {
  gesales: venta[] = [];
  formVenta: FormGroup;
  id: any = 0;
  constructor(
    private salesService: SalesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fromBuilder: FormBuilder
  ) {
    this.formVenta = this.fromBuilder.group({
      fecha: [''],
      cantidad: [''],
      precio_Total: [''],
      producto_CPD: [''],
      cliente_CC: [''],
    });
  }

  async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    await this.GetVenta(this.id);
    console.log(this.gesales);
  }
  async GetVenta(CV: any) {
    this.salesService.getVenta(CV).subscribe((value) => {
      this.gesales[0] = value;
      this.formVenta.setValue({
        fecha: this.gesales[0].fecha,
        cantidad: this.gesales[0].cantidad,
        precio_Total: this.gesales[0].precio_Total,
        producto_CPD: this.gesales[0].producto_CPD,
        cliente_CC: this.gesales[0].cliente_CC,
      });
    });
  }

  update() {
  let actualizar=this.formVenta.value;
  actualizar.cv=parseInt(this.id)
  console.log(actualizar)
  this.salesService.getUpdateSales(actualizar).subscribe(data=>{console.log('ACTUALIZADO')});

}
}