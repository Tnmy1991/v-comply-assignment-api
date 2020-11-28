import { Component, AfterViewInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../../_serviceProvider/services';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements AfterViewInit {

  @Input() _formData: any;
  @Input() _btnLabel: string;

  public formGroup: any;

  constructor( private _userProvider: UsersService, private _router: Router ) {
    this.formGroup = new FormGroup({
      role:             new FormControl(""), 
      password:         new FormControl(""), 
      username:         new FormControl(""), 
      full_name:        new FormControl(""), 
      confirm_password: new FormControl("enabled")
    });
  }

  ngAfterViewInit(): void {
    if( this._formData ) {
      this.formGroup.patchValue({
        role:      this._formData.role, 
        username:  this._formData.username, 
        full_name: this._formData.full_name
      });
    }
  }

  validateForm(): void {
    const isValid = $("#user-form").parsley().validate({ group: 'fieldset-0' });
    if( isValid ) {
      this._userProvider.createRequest(this.formGroup.value).subscribe(response => {
        if( !response.error )
          this._router.navigate(['/portal/application/users']);
      });
    }
  }

  cancelForm(): void {
    $('#user-form').parsley().reset();
    this.formGroup.reset();
  }

}
