import { Component, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  
  @Input() id: string = uuidv4();
  @Input() type: string = "button";
  @Input() class: string = "btn";

  constructor() {}
}
