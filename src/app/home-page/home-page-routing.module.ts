import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { SignInComponent} from './components/sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }, {
    path: 'signUp',
    component: SignUpComponent
  }, {
    path: 'signIn',
    component: SignInComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }