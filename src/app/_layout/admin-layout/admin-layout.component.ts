import { Component, OnInit } from '@angular/core';
import { Event, Router, ActivationEnd, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.sass']
})
export class AdminLayoutComponent implements OnInit {

  constructor( private _router: Router ) {
    this._router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          break;
        }

        case event instanceof ActivationEnd: {
          break;
        }

        case event instanceof NavigationEnd: {
          break;
        }

        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void { }

}
