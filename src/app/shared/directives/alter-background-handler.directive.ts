import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appAlterBackgroundHandler]"
})
export class AlterBackgroundHandlerDirective {
  constructor(private el: ElementRef) { }

  // @Input() appAlterBackgroundHandler = "";
  
  // @HostListener("mouseenter") onMouseEnter() {
  //  // debugger;
  //   this.changeBgColor(this.appAlterBackgroundHandler);
  // }
  // @HostListener("mouseleave") onMouseLeave() {
  //   //debugger;
  //   this.changeBgColor("blue");
  // }
  // private changeBgColor(color: string) {
  //  // debugger;
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }
}