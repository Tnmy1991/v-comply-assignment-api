import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.sass']
})
export class WrapperComponent {

  @Input() additionalClass: string = "";
  
  constructor() { }

}
