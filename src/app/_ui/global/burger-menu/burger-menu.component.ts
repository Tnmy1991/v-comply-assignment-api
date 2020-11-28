import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.sass']
})
export class BurgerMenuComponent implements OnInit {

  constructor( private _elementRef: ElementRef ) { }

  ngOnInit(): void {
    let ref = this, 
        elem = this._elementRef.nativeElement.querySelector("#burger-menu-container");
    window.addEventListener('click', function(e){
      let currentPosition = elem.getBoundingClientRect().right;
      if ( !elem.contains(e.target) && currentPosition === 348 )
        ref.closeMenu();
    });
  }

  closeMenu(): void {
    document.body.classList.remove("sidebar-enabled");
    document.getElementById("burger-menu-btn").classList.toggle("active");
  }

}
