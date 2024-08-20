import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent {

  currentStep = 0;
  personalDetailsForm: FormGroup;
  educationDetailsForm: FormGroup;
  workExperienceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.educationDetailsForm = this.fb.group({
      degree: ['', Validators.required],
      university: ['', Validators.required],
      yearOfPassing: ['', Validators.required]
    });

    this.workExperienceForm = this.fb.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      yearsOfExperience: ['', Validators.required]
    });
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submit() {
    if (this.personalDetailsForm.valid && this.educationDetailsForm.valid && this.workExperienceForm.valid) {
      const formData = {
        personalDetails: this.personalDetailsForm.value,
        educationDetails: this.educationDetailsForm.value,
        workExperience: this.workExperienceForm.value
      };
      console.log('Form Submitted', formData);
    } else {
      console.log('Form is invalid');
    }
  }

}
