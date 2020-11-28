import { NgModule } from '@angular/core';

import { MihupUiModule } from './../_ui/mihup-ui.module';
import { AuthenticationComponent } from './authentication.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    PageLoginComponent, 
    AuthenticationComponent
  ],
  imports: [
    MihupUiModule, 
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
