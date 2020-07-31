import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionarDespachosComponent} from './gestionar-despachos/gestionar-despachos.component';
import {AddDeliveryComponent} from './add-delivery/add-delivery.component';
import {RemoveDeliveryComponent} from './remove-delivery/remove-delivery.component';


const appRoutes: Routes = [
  { path: '',
    component: GestionarDespachosComponent,
    children: [
      { path: '', redirectTo: 'add-delivery', pathMatch: 'prefix' },
      {
        path: 'add-delivery', // child route path
        component: AddDeliveryComponent // child route component that the router renders
      },
      {
        path: 'remove-delivery',
        component: RemoveDeliveryComponent // another child route component that the router renders
      }
    ]
  },
];

const routes: Routes = [
  { path: '',
    component: GestionarDespachosComponent,
    children: [
      { path: '', redirectTo: 'search-teachers', pathMatch: 'prefix' },
      {
          path: 'add-delivery',
          component: AddDeliveryComponent,
          data: {
            title: 'Busqueda de profesores'
          }
        },
        {
          path: 'remove-delivery',
          component: RemoveDeliveryComponent,
          data: {
            title: 'Edicion de profesores'
          }
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespachosRoutingModule { }
