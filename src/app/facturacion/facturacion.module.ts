import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacFacturasMaestrasComponent } from './fac-facturas-maestras/fac-facturas-maestras.component';


@NgModule({
  declarations: [FacFacturasMaestrasComponent],
  imports: [
    CommonModule,
    FacturacionRoutingModule
  ]
})
export class FacturacionModule { }
