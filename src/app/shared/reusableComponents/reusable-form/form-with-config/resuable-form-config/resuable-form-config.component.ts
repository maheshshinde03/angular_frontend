import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerFormConfig } from 'src/app/core/constant/register-form-constant';
import { IForm, IFormControl, IValidator } from 'src/app/core/models/interfaces/reuableform';

@Component({
  selector: 'app-resuable-form-config',
  templateUrl: './resuable-form-config.component.html',
  styleUrls: ['./resuable-form-config.component.css']
})
export class ResuableFormConfigComponent implements OnInit {
//@Input() form!: IForm;   --if u want to get form data from parent component that case u can use this

registerForm = registerFormConfig as IForm;

dynamicFormGroup: FormGroup;

constructor(private fb: FormBuilder) {
  this.dynamicFormGroup = this.fb.group({});
}

ngOnInit() {
  if (this.registerForm?.formControls) {
    const formGroup: any = {};
    this.registerForm.formControls.forEach((control: IFormControl) => {
      const controlValidators: any = [];
      if (control.validators) {
        control.validators.forEach((val: IValidator) => {
          if (val.validatorName === 'required') controlValidators.push(Validators.required);
          if (val.validatorName === 'email') controlValidators.push(Validators.email);
          if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number));
          if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
          if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
        });
      }
      formGroup[control.name] = [control.value || '', controlValidators];
    });
    this.dynamicFormGroup = this.fb.group(formGroup);
  }
  
}

onSubmit() {
  
    console.log('Form values:', this.dynamicFormGroup.value);
  
}

getErrorMessage(control: IFormControl):string{
const myFormControl = this.dynamicFormGroup.get(control.name);
let errorMessage = "";
control.validators.forEach((val) =>{
  if(myFormControl?.hasError(val.validatorName as string)){
    errorMessage =  val.message as string;
  }
});
 return errorMessage

}


// Implement validation error message handling here


resetForm() {
  this.dynamicFormGroup.reset();
}
}
