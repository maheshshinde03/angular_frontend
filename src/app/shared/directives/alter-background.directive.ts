import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlterBackground]'
})
export class AlterBackgroundDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }



}
