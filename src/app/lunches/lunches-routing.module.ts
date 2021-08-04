import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunchesComponent } from './lunches.component';


const routes: Routes = [
  {
    path: '',
    component: LunchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunchesRoutingModule { }