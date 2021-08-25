import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { AddFoodComponent } from './components/add-food/add-food.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  }, {
    path: 'add',
    component: AddFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }