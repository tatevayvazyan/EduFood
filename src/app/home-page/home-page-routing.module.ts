import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { SignInComponent} from './components/sign-in/sign-in.component';
import { UsersComponent} from './components/users/users.component';
import { HomePageResolver } from './services/home-page.resolver';
import { UsersResolver } from './services/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      homePageResolver: HomePageResolver
    }
  }, {
    path: 'signUp',
    component: SignUpComponent
  }, {
    path: 'signIn',
    component: SignInComponent
  }, {
    path: 'users',
    component: UsersComponent,
    resolve: {
      usersResolver: UsersResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }