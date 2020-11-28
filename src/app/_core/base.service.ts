import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class BaseService {
  httpWithoutInterceptor: HttpClient;

  constructor(
    private httpClient: HttpClient, 
    private httpBackend: HttpBackend
  ) {
    this.httpWithoutInterceptor = new HttpClient(httpBackend)
  }

  private handleError(error: HttpErrorResponse) {
    let msg: string;
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      msg = "Something went wrong. Please, try again after a little bit.";
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError(msg);
  }

  getRequest( url: string ): Observable<any> {
    return this.httpClient.get(environment.endpoint + url).pipe(retry(3));
  }

  postRequest( url: string, body: any ): Observable<any> {
    return this.httpClient.post(environment.endpoint + url, body).pipe(retry(1));
  }

  putRequest( url: string, body: any ): Observable<any> {
    return this.httpClient.put(environment.endpoint + url, body).pipe(retry(1));
  }

  deleteRequest( url: string ): Observable<any> {
    return this.httpClient.delete(environment.endpoint + url).pipe(retry(1));
  }

  postBackendRequest( url: string, body: any ): Observable<any> {
    return this.httpWithoutInterceptor.post(environment.endpoint + url, body).pipe(retry(1), catchError(this.handleError));
  }

}