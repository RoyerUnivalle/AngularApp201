import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespachosRoutingModule } from './despachos-routing.module';
import { GestionarDespachosComponent } from './gestionar-despachos/gestionar-despachos.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { RemoveDeliveryComponent } from './remove-delivery/remove-delivery.component';

// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [GestionarDespachosComponent, AddDeliveryComponent, RemoveDeliveryComponent],
  imports: [
    CommonModule,
    DespachosRoutingModule,
    // ToastrModule.forRoot()
  ]
})
export class DespachosModule { }
