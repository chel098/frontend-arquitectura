import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  listproveedor:proveedor[]=[];
  constructor(private provService:ProveedorService,private router: Router) { }

  async ngOnInit():Promise<void> {
    await this.getProvList();
  }

  async getProvList(){
    await this.provService.getProvList().subscribe(value =>{
      this.listproveedor=value
    })
  }

}
