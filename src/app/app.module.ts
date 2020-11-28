import { NgModule } from '@angular/core';
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseService } from './_core/base.service';
import { QueryLoaderComponent } from './_ui/global';
import { MihupUiModule } from './_ui/mihup-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AdminLayoutComponent, NotFoundComponent } from './_layout';
import { ApiInterceptor, ErrorInterceptor } from './_serviceProvider/middleware';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AdminLayoutComponent, 
    QueryLoaderComponent 
  ],
  imports: [
    BrowserModule, 
    MihupUiModule, 
    AppRoutingModule,  
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("access_token");
        },
        allowedDomains: [environment.whitelist_domain],
        disallowedRoutes: [
          environment.base_url + 'portal/authorize/sign-in'
        ],
      },
    })
  ],
  providers: [
    Title, 
    BaseService, 
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }