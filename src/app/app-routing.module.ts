import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionarDespachosComponent} from './despachos/gestionar-despachos/gestionar-despachos.component';
import {FacFacturasMaestrasComponent} from './facturacion/fac-facturas-maestras/fac-facturas-maestras.component';

const routes: Routes = [
  { path: 'delivery-management', loadChildren: './despachos/despachos.module#DespachosModule' },
  { path: 'fac-facturas', loadChildren: './facturacion/facturacion.module#FacturacionModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
