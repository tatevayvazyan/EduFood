import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpMethodsService } from '../services/http-methods.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from '../services/custom-http-interceptor';

@NgModule({
  declarations: [
    OrdersComponent,
    AddFoodComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpMethodsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    }
  ]
})
export class OrdersModule { }
