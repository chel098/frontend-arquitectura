import { Component, OnInit } from '@angular/core';
import {venta} from "../../models/Venta";
import {Router} from "@angular/router";
import {SalesService} from "../../service/sales.service";

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  listventa: venta[]=[];
  constructor(private salesService:SalesService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.getListVenta();

  }

  async getListVenta(){
    await this.salesService.getSalesList().subscribe(value => {
      this.listventa=value;
    });
  }

  delete(id:number){

    this.salesService.getDeleteSales(id).subscribe(value => {
      console.log(value);
    });
  }


}
