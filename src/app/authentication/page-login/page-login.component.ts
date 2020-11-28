import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertService, AuthService, UsersService } from './../../_serviceProvider/services';
declare var $: any;

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.sass']
})
export class PageLoginComponent implements OnInit {

  public _formGroup: FormGroup;

  constructor(
    private _router: Router, 
    private _auth: AuthService,
    private _alert: AlertService, 
    private _elementRef: ElementRef,
    private _usersProvider: UsersService
  ) { 
    if( this._auth.isAuthenticated() )
      this._router.navigate(['/portal/application/vendors']);
  }

  ngOnInit(): void {
    this._formGroup = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }

  authorize(): void {
    const loginBtn = this._elementRef.nativeElement.querySelector("#btn-sign-in");
    const isValid  = $("#signin-form").parsley().validate({ group: 'fieldset-0' });

    if( isValid ) {
      loginBtn.innerHTML = "Please Wait ...";
      loginBtn.setAttribute("disabled", "disabled");

      this._usersProvider.loginRequest(this._formGroup.value).subscribe(response => {
        if( !response.error ) {
          this._alert.success(response.message);
          this._auth.setAuthentication(response.token);
          this._router.navigate(['/portal/application/vendors']);
        } else {
          loginBtn.innerHTML = "Sign In";
          loginBtn.removeAttribute("disabled");

          this._alert.error(response.message);
        }
      }, error => {
        loginBtn.innerHTML = "Sign In";
        loginBtn.removeAttribute("disabled");

        this._alert.error(error);
      });
    }
  }

}
