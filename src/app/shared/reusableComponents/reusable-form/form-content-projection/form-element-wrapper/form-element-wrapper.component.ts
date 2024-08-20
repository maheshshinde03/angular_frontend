import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-element-wrapper',
  templateUrl: './form-element-wrapper.component.html',
  styleUrls: ['./form-element-wrapper.component.css']
})
export class FormElementWrapperComponent implements OnInit {

  @Input() label: string;
  @Input() tooltip: string;
  @Input() validation: any;



  constructor() { }


  ngOnInit(): void {
    console.log(this.label);
  }

  getValidationMessage() {
    const objKeys = Object.keys(this.validation);
    if (objKeys.length !== 0) {
      if (objKeys[0] == "required") {
        return "This is Required Field"
      } else if (objKeys[0] == "minlength") {
        const msg = "Min charactors Requried is " + this.validation[objKeys[0]].requiredLength;
        return msg;
        // return JSON.stringify(this.validation[objKeys[0]]);
      } else if (objKeys[0] == "pattern") {
        return this.validation[objKeys[0]];
      }
    }
    else {
      return '';
    }
  }

}
