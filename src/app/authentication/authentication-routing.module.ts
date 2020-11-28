import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { PageLoginComponent } from './page-login/page-login.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthenticationComponent, 
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: PageLoginComponent, data: { title: 'Sign In' } }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
