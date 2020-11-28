import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserManagementComponent } from './user-management.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserManagementComponent, 
    children: [
      { path: '', component: UsersComponent, data: { title: 'Users' } },
      { path: 'create-user', component: CreateUserComponent, data: { title: 'Create User' } }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
