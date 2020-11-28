import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

  @Input() _id: string;
  @Input() _class: string;
  @Input() _title: string;
  @Input() enable_footer: boolean = false;

  constructor() { }
}
