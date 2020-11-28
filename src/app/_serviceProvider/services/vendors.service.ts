import { Injectable } from '@angular/core';
import { BaseService } from '../../_core/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorsService extends BaseService {
  private endpoint:  string = "vendors";

  createVendor(data: any): Observable<any> {
    return this.postRequest( `${this.endpoint}/create`, data);
  }

  listRequest(): Observable<any> {
    return this.getRequest( `${this.endpoint}/list`);
  }

  getVendor(id: string): Observable<any> {
    return this.getRequest( `${this.endpoint}/${id}`);
  }

  updateVendor(id: string, data: any): Observable<any> {
    return this.putRequest( `${this.endpoint}/${id}`, data);
  }

}
