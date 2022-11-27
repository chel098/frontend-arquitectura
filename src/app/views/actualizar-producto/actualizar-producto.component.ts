import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/models/Producto';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  geproduct: producto[]=[]
  formProduct: FormGroup;
  id: any=0;
  
  constructor(
    private productService:ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fromBuilder:FormBuilder
  ) { 
    this.formProduct = this.fromBuilder.group({
      nombre:[''],
      descripcion:[''],
      stock:[''],
      precio_compra:[''],
      precio_venta:[''],
      fecha_vencimiento:[''],
      proveedor_CPR:['']
    }); 
  }
  async ngOnInit(): Promise<void> {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    await this.GetProduct(this.id);
    console.log(this.geproduct);
  }

  async GetProduct(CPD: any){
    this.productService.getProducto(CPD).subscribe((value)=>{
      this.geproduct[0] = value;
      this.formProduct.setValue({
        nombre:this.geproduct[0].nombre,
        descripcion:this.geproduct[0].descripcion,
        stock:this.geproduct[0].stock,
        precio_compra:this.geproduct[0].precio_compra,
        precio_venta:this.geproduct[0].precio_venta,
        fecha_vencimiento:this.geproduct[0].fecha_vencimiento,
        proveedor_CPR:this.geproduct[0].proveedor_CPR
      })
    })
  }
  update(){
    let actualizar=this.formProduct.value
    actualizar.cpd=parseInt(this.id)
    console.log(actualizar)
    this.productService.getUpdateProduct(actualizar).subscribe(data=>{console.log('ACTUALIZADO')})
  }
}
