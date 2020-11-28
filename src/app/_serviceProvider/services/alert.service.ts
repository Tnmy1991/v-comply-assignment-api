import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _toast: any = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    showCloseButton: true,
    showClass: {
      popup: 'animate__animated animate__fadeIn'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut'
    },
    customClass: {
      container: 'ui-sweetalert-container',
    }
  });

  error( msg: string = "Something went wrong. Please, try again after a little bit."): Observable<any> {
    return of(this._toast.fire({
      icon: 'error',
      title: msg,
      timer: 3000,
      timerProgressBar: true
    })).pipe(delay(1500));
  }

  success( msg: string = "Success"): Observable<any> {
    return of(this._toast.fire({
      icon: 'success',
      title: msg,
      timer: 3000,
      timerProgressBar: true
    })).pipe(delay(1500));
  }

  warning(msg: string, label: string = "Delete"): Observable<any> {
    return of(this._toast.fire({
      title: "Are you sure?",
      text: msg,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: label,
      confirmButtonAriaLabel: label,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#dee2e6',     
    }));
  }
}