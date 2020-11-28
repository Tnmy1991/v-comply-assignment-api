import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VendorsService } from '../../../_serviceProvider/services';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.sass']
})
export class CreateVendorComponent implements AfterViewInit {

  public formGroup: any;

  constructor( private _vendorProvider: VendorsService, private _router: Router, private _elementRef: ElementRef ) {
    this.formGroup = new FormGroup({
      vendor_name:           new FormControl(""), 
      sequential_approvers:  new FormControl(""), 
      round_robin_approvers: new FormControl(""), 
      any_one_approvers:     new FormControl("")
    });
  }

  ngAfterViewInit(): void {
  }

  validateForm(): void {
    const isValid = $("#vendor-form").parsley().validate({ group: 'fieldset-0' });
    if( isValid ) {
      this._vendorProvider.createVendor(this.formGroup.value).subscribe(response => {
        if( !response.error )
          this._router.navigate(['/portal/application/vendors']);
      });
    }
  }

  handleEmitter( data: any, field: string): void {
    const event = document.createEvent('Event');
    event.initEvent('input', true, true);

    this.formGroup.patchValue({ [field]: data });
    this._elementRef.nativeElement.querySelector(`#${field}`).dispatchEvent(event);
  }

  cancelForm(): void {
    $('#user-form').parsley().reset();
    this.formGroup.reset();
  }

}
