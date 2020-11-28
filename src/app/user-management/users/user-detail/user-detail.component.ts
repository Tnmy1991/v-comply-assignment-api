import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {

  public user_detail: any;
  public user_tag: string = "";
  @Input() _reInitialize: Subject<any> = new Subject<any>();
  
  constructor() { }

  ngOnInit(): void {
    this._reInitialize.subscribe(response => {
      if(response) {
        this.user_detail = response;
        const name = response.full_name.split(" ");
        this.user_tag = name.length > 1 ? `${name[0].charAt(0)}${name[1].charAt(0)}` : `${name[0].charAt(0)}`;
      }
    });
  }

}
