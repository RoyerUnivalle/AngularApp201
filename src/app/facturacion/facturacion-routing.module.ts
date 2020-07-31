import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacFacturasMaestrasComponent} from './fac-facturas-maestras/fac-facturas-maestras.component';


const routes: Routes = [
  { path: '',
    component: FacFacturasMaestrasComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionRoutingModule { }
