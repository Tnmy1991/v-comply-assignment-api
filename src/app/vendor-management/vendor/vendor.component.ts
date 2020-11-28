import { Component, OnInit } from '@angular/core';
import { VendorsService } from './../../_serviceProvider/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.sass']
})
export class VendorComponent implements OnInit {

  public vendorsList: any;
  public headerArray: any;
  public reInitialize: Subject<any> = new Subject<any>();

  constructor( public  _vendorProvider: VendorsService) { 
    this.headerArray = [
      { label: "Sl No.",additional_class: "sl_no" }, 
      { label: "Vendor",additional_class: "" }, 
      { label: "Created On", additional_class: "" }
    ];

  }

  ngOnInit(): void {}

  handleEmitterData( data: any ): void {
    this.vendorsList = data;
    this.showDetails(data[0]);
  }

  showDetails( data: any ): void {
    this.reInitialize.next(data);
  }

}
