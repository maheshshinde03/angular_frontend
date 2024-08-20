import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  registerForm : FormGroup
  dynamicFormArray: any;

  constructor(
    private httpclient: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.registerForm = this.fb.group({

    })

    this.httpclient.get('../../../../../../assets/DyanamicFormControls.json').subscribe(data => {
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray);
      this.createFormControl();
    })

  }

  createFormControl(){
    this.dynamicFormArray.forEach((element:any) => {
      if(element.Required === true){
        this.registerForm.addControl(element.ID, new FormControl('', Validators.required));
      }else{
        this.registerForm.addControl(element.ID, new FormControl(''));
      }
      
  });

  console.log(this.registerForm);
}

submit(){
console.log(this.registerForm.value);
}

}
