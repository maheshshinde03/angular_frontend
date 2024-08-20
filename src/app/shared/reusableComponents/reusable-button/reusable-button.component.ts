import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.css']
})
export class ReusableButtonComponent {

  @Input() buttonText: string;
  @Input() btnClass: string;
  @Output() buttonClick = new EventEmitter();

  emitEvent(){
    this.buttonClick.emit();
  }
}
