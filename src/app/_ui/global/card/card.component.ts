import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() enableHeader: boolean = true;

  constructor() { }

}
