import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.sass']
})
export class VendorDetailComponent implements OnInit {

  public vendor_detail: any;
  public vendor_tag: string = "";

  @Input() _reInitialize: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this._reInitialize.subscribe(response => {
      if(response) {
        this.vendor_detail = response;
        const name = response.vendor_name.split(" ");
        this.vendor_tag = name.length > 1 ? `${name[0].charAt(0)}${name[1].charAt(0)}` : `${name[0].charAt(0)}`;
      }
    });
  }

}
