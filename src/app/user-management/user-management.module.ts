import { NgModule } from '@angular/core';

import { UsersComponent } from './users/users.component';
import { MihupUiModule } from './../_ui/mihup-ui.module';
import { UserManagementComponent } from './user-management.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UsersComponent, 
    UserFormComponent, 
    CreateUserComponent,   
    UserDetailComponent, 
    UserManagementComponent 
  ],
  imports: [
    MihupUiModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
