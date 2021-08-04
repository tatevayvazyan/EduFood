import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchesComponent } from './lunches.component';
import { LunchesRoutingModule } from './lunches-routing.module';

@NgModule({
  declarations: [
    LunchesComponent,
  ],
  imports: [
    CommonModule,
    LunchesRoutingModule,
  ]
})
export class LunchesModule { }
