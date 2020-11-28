import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent, NotFoundComponent } from './_layout';

const routes: Routes = [
  { path: '', redirectTo: 'portal/application', pathMatch: 'full' }, 
  { 
    path: 'portal/application', 
    component: AdminLayoutComponent, 
    children: [
      { path: '', redirectTo: 'portal/application/vendors', pathMatch: 'full' }, 
      { path: 'users', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
      { path: 'vendors', loadChildren: () => import('./vendor-management/vendor-management.module').then(m => m.VendorManagementModule) }
    ] 
  }, 
  { path: 'portal/authorize', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }, 
  { path: 'portal/not-found', component: NotFoundComponent, data: { title: '404 - Pgae Not Found' } },
  { path: '**', redirectTo: 'portal/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
