import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './_serviceProvider/services';
import { Event, Router, NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public isLoading: boolean = false;

  constructor( 
    private _title: Title, 
    private _router: Router,
    private _auth: AuthService  
  ) {
    if( !this._auth.isAuthenticated() )
      this._router.navigate(['/portal/authorize/sign-in']);
    
    this._router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.isLoading = false;
          let root = this._router.routerState.snapshot.root;
          while (root) {
            if (root.children && root.children.length)
              root = root.children[0];
            else if (root.data && root.data["title"])
              return this._title.setTitle(`${root.data["title"]} | Vendor On-boarding`);
            else
              return;
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {}
}
