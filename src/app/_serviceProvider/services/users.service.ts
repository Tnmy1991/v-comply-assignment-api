import { Injectable } from '@angular/core';
import { BaseService } from '../../_core/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {
  private endpoint:  string = "users";

  loginRequest(data: any): Observable<any> {
    return this.postBackendRequest( `${this.endpoint}/login`, data);
  }

  listRequest(): Observable<any> {
    return this.getRequest( `${this.endpoint}/list`);
  }

  createRequest(data: any): Observable<any> {
    return this.postRequest( `${this.endpoint}/create`, data);
  }

}
