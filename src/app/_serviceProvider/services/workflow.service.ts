import { Injectable } from '@angular/core';
import { BaseService } from '../../_core/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService extends BaseService {
  private endpoint:  string = "workflow-logs";

  submitWorklog(data: any): Observable<any> {
    return this.postRequest( `${this.endpoint}/entry`, data);
  }

  getWorklog(id: any): Observable<any> {
    return this.getRequest( `${this.endpoint}/status/${id}`);
  }

}
