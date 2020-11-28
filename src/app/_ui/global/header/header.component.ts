import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { AuthService } from './../../../_serviceProvider/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public _displayName: string;

  @Input() navigation: boolean = true;
  @Input() navigationData: Array<any> = [];

  constructor( 
    private _router: Router, 
    private _auth: AuthService, 
    private _elementRef: ElementRef
  ) { 
    this._displayName = this._auth.getUsername();
  }

  ngOnInit(): void {
    const burgerBtn = this._elementRef.nativeElement.querySelector("#burger-menu-btn");
    burgerBtn.addEventListener("click", function() {
      document.body.classList.toggle("sidebar-enabled");
      burgerBtn.classList.toggle("active");
    });
  }

  logout(): void {
    if (this._auth.clearAuthentication())
      this._router.navigate(['/portal/authorize/sign-in']);
  }
}
