import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent  } from './views/index/index.component';
import {VentaComponent} from "./views/venta/venta.component";
import {ProductoComponent} from "./views/producto/producto.component";
import {IngresarVentaComponent} from "./views/ingresar-venta/ingresar-venta.component";
import {ActualizarVentaComponent} from "./views/actualizar-venta/actualizar-venta.component";
import { ProveedorComponent } from './views/proveedor/proveedor.component';
import { AppAuthGuard } from 'src/guard/auth.guard';
import { ErrorComponent } from './views/error/error.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { IngresarProductComponent } from './views/ingresar-product/ingresar-product.component';
import { ActualizarProductoComponent } from './views/actualizar-producto/actualizar-producto.component';
import { IngresarClienteComponent } from './views/ingresar-cliente/ingresar-cliente.component';
import { ActualizarClienteComponent } from './views/actualizar-cliente/actualizar-cliente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER,ADMIN']}

  },
  {
    path: 'venta',
    component: VentaComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}

  },
  {
    path: 'crearVenta',
    component: IngresarVentaComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'updateVenta/:id',
    component: ActualizarVentaComponent,
    canActivate: [AppAuthGuard], data: {roles:['ADMIN']}
  },
  {
    path: 'producto',
    component: ProductoComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'crearProducto',
    component: IngresarProductComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'updateProducto/:id',
    component: ActualizarProductoComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'proveedor',
    component: ProveedorComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'crearCliente',
    component: IngresarClienteComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'updateCliente/:id',
    component: ActualizarClienteComponent,
    canActivate: [AppAuthGuard], data: {roles:['USER','ADMIN']}
  },
  {
    path: 'error',
    component: ErrorComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
