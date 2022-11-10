import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent  } from './views/index/index.component';
import {VentaComponent} from "./views/venta/venta.component";
import {ProductoComponent} from "./views/producto/producto.component";
import {IngresarVentaComponent} from "./views/ingresar-venta/ingresar-venta.component";
import {ActualizarVentaComponent} from "./views/actualizar-venta/actualizar-venta.component";
import { ProveedorComponent } from './views/proveedor/proveedor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,

  },
  {
    path: 'venta',
    component: VentaComponent
  },
  {
    path: 'crearVenta',
    component: IngresarVentaComponent
  },
  {
    path: 'updateVenta/:id',
    component: ActualizarVentaComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'proveedor',
    component: ProveedorComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
