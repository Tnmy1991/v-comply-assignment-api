import { Component, AfterViewInit, Input, Output, EventEmitter  } from '@angular/core';
import { UsersService } from '../../../_serviceProvider/services';

@Component({
  selector: 'app-ui-data-selection',
  templateUrl: './data-selection.component.html',
  styleUrls: ['./data-selection.component.sass']
})
export class DataSelectionComponent implements AfterViewInit {

  public dataList: any;
  public assignData = [];
  public headerArray: any;
  public totalRecords: number = 0;
  public _contextLabel: string = "";
  public contectText: string = "user selected";
  public _datatableContainer: string = "group-options col-no-padding";

  @Input() _title: string = "";

  @Output() _approversArray: EventEmitter<string> = new EventEmitter();

  constructor( private _userProvider: UsersService ) { 
    this.headerArray = [
      { label: "",additional_class: "select-row"}, 
      { label: "Full Name",additional_class: ""}, 
      { label: "Role", additional_class: ""}
    ];
  }

  ngAfterViewInit(): void {
    this._userProvider.listRequest().subscribe(response => {
      if ( !response.error ) {
        this.dataList = response.data;
        this.totalRecords = response.data.length;
        this.contectText = (this.totalRecords > 1) ? "records found" : "record found";
      } else {
        this.dataList = false;
        this.totalRecords = 0;
        this.contectText = "record found";
      }
    });
  }

  selectRow( event: any ): void {
    if( event.target.checked )
      this.assignData.push(event.target.value)
    else
      this.assignData.splice(this.assignData.indexOf(event.target.value), 0)

    this._approversArray.emit(this.assignData.join(","))
  }

}
