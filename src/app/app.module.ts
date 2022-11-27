import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ProductoComponent } from './views/producto/producto.component';
import { ProveedorComponent } from './views/proveedor/proveedor.component';
import { VentaComponent } from './views/venta/venta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { IngresarVentaComponent } from './views/ingresar-venta/ingresar-venta.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { ActualizarVentaComponent } from './views/actualizar-venta/actualizar-venta.component';
import { IngresarProductComponent } from './views/ingresar-product/ingresar-product.component';
import { initializeKeycloak } from 'src/utils/app.utils';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppAuthGuard } from 'src/guard/auth.guard';
import { ActualizarProductoComponent } from './views/actualizar-producto/actualizar-producto.component';
import { IngresarClienteComponent } from './views/ingresar-cliente/ingresar-cliente.component';
import { ActualizarClienteComponent } from './views/actualizar-cliente/actualizar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdministradorComponent,
    ClienteComponent,
    ProductoComponent,
    ProveedorComponent,
    VentaComponent,
    IngresarVentaComponent,
    ActualizarVentaComponent,
    IngresarProductComponent,
    ActualizarProductoComponent,
    IngresarClienteComponent,
    ActualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  },
   AppAuthGuard,],
   bootstrap: [AppComponent]
})
export class AppModule { }
