import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthService, AlertService } from '../../_serviceProvider/services';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private _auth: AuthService, 
    private _alert: AlertService, 
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ref = this;
    let isAuthenticated = this._auth.isAuthenticated();
    let access_token = localStorage.getItem('access_token');
    
    if (isAuthenticated && access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        }
      });
    }
    
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        switch(event.status) {          
          case 201:
            this._alert.success("Record saved successfully.");
            break;
          
          case 202:
            this._alert.success("Record deleted successfully.");
            break;
        }
      }
    }, (err: any) => {
      return;
    }));
  }
}