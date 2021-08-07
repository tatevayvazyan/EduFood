import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [ 
    HomePageComponent, 
    SignUpComponent, 
    SignInComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule { }
