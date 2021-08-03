import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LunchesComponent } from "./lunches/lunches.component";

const routes: Routes = [
  {path: 'all', component: HomePageComponent},
  {path: 'lunches', component: LunchesComponent},
  {path: '', component: HomePageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
