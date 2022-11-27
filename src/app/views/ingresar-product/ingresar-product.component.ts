import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ingresar-product',
  templateUrl: './ingresar-product.component.html',
  styleUrls: ['./ingresar-product.component.css']
})
export class IngresarProductComponent implements OnInit {
  formProduct: FormGroup;
  constructor(private fromBuilder: FormBuilder,
              private productService: ProductService,
              private router: Router) 
  {
    this.formProduct = this.fromBuilder.group({
      nombre:[''],
      descripcion:[''],
      stock:[''],
      precio_compra:[''],
      precio_venta:[''],
      fecha_vencimiento:[''],
      proveedor_CPR:['']
    })
   }

  ngOnInit() {
  }

  async getCrearProduct(newproduct:any){
    await this.productService.getAddProduct(newproduct).subscribe(value =>{
      this.router.navigate(['/','producto']);
    })
  }

  saveProduct(){
    const prod:any = this.formProduct.value;
    this.getCrearProduct(prod);
  }
}
