import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent {

  @Input() text: string;
  @Input() wordLimit: number;     // number of words need to be showed at initial level
 showMore: boolean;
 
 constructor(){
   this.showMore = false;
 }
}
