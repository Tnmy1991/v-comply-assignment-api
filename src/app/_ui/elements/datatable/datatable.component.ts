import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ui-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass']
})
export class DatatableComponent implements OnInit {
  
  @Input() _id: string;
  @Input() _header: any;
  @Input() _isHeader: boolean = true;
  @Input() _serviceObject: any = null;
  @Input() _reInitiate: Subject<boolean> = new Subject<boolean>();

  @Output() _reocords: EventEmitter<any> = new EventEmitter();
  
  public totalRecords: number = 0;
  public contectText: string = "record found";

  constructor( private _elementRef: ElementRef ) { }

  ngOnInit(): void {
    this.fetchData();
    this._reInitiate.subscribe(response => {
      if(response)
        this.fetchData();
    });
  }

  fetchData(): void {
    this._serviceObject.listRequest().subscribe(response => {
      if ( !response.error ) {
        this.totalRecords = response.data.length;
        this.contectText = (this.totalRecords > 1) ? "records found" : "record found";
        this._reocords.emit(response.data);
      } else {
        this.totalRecords = 0;
        this.contectText = "record found";
        this._reocords.emit(false);
      }
    });
  }
}
