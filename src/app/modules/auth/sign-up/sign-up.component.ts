import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/user.service';
import { ToastrService } from 'ngx-toastr';
import { confirmPasswordValidator, strongPasswordValidator} from '../../../shared/validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService : UserService,
    private toastr: ToastrService) {}
  
  ngOnInit() {
    // this.registerForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    //   mobile: ['', [Validators.required]],
    //   city: ['', [Validators.required]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required],
    // });

    this.registerForm  = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
      city: new FormControl('',Validators.required),  
      password: new FormControl('', [Validators.required, strongPasswordValidator()]),
      confirmPassword : new FormControl('')
  },
  {
    validators: confirmPasswordValidator
  });

}

  register() {
    this.userService.registerUser(this.registerForm.value).subscribe((data: any) => {
   // console.log('User added successfully!');
   //this.toastAlertService.showToast('Register successfully.', 'Success', 'success');
   this.toastr.success('Register successfully.', 'Success', {closeButton:true, positionClass:'toast-top-right', timeOut:3000}); 
   //this.toastr.success('Register successfully.', 'Success'); 
   this.router.navigateByUrl('/auth/login');
    }, (error) =>{
      console.log(error);
    });

    // setTimeout(() =>{
    //   this.registerForm.reset();
    // }, 2000)
    
  }

  submit() {
    // alert('hi');
    this.router.navigateByUrl('forgot');
  }
}
