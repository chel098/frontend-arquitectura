import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/models/Producto';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  listproduct: producto[]=[];
  constructor(private productService:ProductService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.getProductList();
  }
 async getProductList() {
  await this.productService.getProductList().subscribe(=>{
    this.listproduct=value;
  });
 }

}
