import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [

  {
    path:'auth/login', 
    component: LoginComponent
  },
  {
    path:'auth/sign-up', 
    component: SignUpComponent
  },
  {
    path:'auth/forgot-password', 
    component: ForgotPasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }