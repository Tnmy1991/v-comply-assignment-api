import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../_serviceProvider/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  public usersList: any;
  public headerArray: any;
  public reInitialize: Subject<any> = new Subject<any>();

  constructor( 
    public  _userProvider: UsersService
  ) { 
    this.headerArray = [
      { label: "Sl No.",additional_class: "sl_no"}, 
      { label: "Full Name",additional_class: ""}, 
      { label: "Role", additional_class: ""}, 
      { label: "Created On", additional_class: ""}
    ];
  }

  ngOnInit(): void {}

  handleEmitterData( data: any ): void {
    this.usersList = data;
    this.showDetails(data[0]);
  }

  showDetails( data: any ): void {
    this.reInitialize.next(data);
  }

}