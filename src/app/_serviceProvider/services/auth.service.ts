import { Injectable, OnDestroy } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  constructor( private _router: Router, private _alert: AlertService, private jwtHelper: JwtHelperService ) { }

  private storageObserver( event: StorageEvent ): void {
    let ref = this;
    if (event.storageArea == localStorage) {
      if( event.oldValue !== event.newValue ) {
        ref.storageClear();
        ref._router.navigate(['/portal/authorize/sign-in']);
        ref._alert.error('Access violation detected. Please, sign-in again.');
      }
    }
  }

  private storageClear(): void {
    window.removeEventListener("storage", this.storageObserver.bind(this));
    localStorage.removeItem('access_token');
  }
  
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return (token != "undefined") ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  setAuthentication(token: string): void {
    localStorage.setItem('access_token', token);
    window.addEventListener("storage", this.storageObserver.bind(this));
  }

  clearAuthentication(): boolean {
    this.storageClear();
    return true;
  }

  getRoleData(): any {
    if(this.isAuthenticated()) {
      const payload: any = decode(localStorage.getItem('access_token'));
      return payload.data.role;
    }
  }

  getIdentity(): any {
    if(this.isAuthenticated()) {
      const payload: any = decode(localStorage.getItem('access_token'));
      return payload.data.id;
    }
  }

  getUsername(): any {
    if(this.isAuthenticated()) {
      const payload: any = decode(localStorage.getItem('access_token'));
      return payload.data.full_name;
    }
  }

  ngOnDestroy() {
    this.storageClear();
  }
}

