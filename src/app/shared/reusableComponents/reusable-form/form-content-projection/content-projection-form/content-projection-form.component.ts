import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-content-projection-form',
  templateUrl: './content-projection-form.component.html',
  styleUrls: ['./content-projection-form.component.css']
})
export class ContentProjectionFormComponent implements OnInit{

  userForm : FormGroup;

  // userObj : any = {
  //   fullname : '',
  //   email : '',
  //   mobile: '',
  //   city: '',  
  //   password :'' ,
  //   confirmPassword : '',

  // }
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService : UserService,
    private toastr: ToastrService
  ){
 
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl('',[Validators.required]),
      city: new FormControl('',Validators.required),  
      password: new FormControl('', [Validators.required]),
      confirmPassword : new FormControl('')
    });

  }

  registerForm(){
    console.log(this.userForm.value);
    this.userService.registerUser(this.userForm.value).subscribe((data: any) => {
      // console.log('User added successfully!');
      //this.toastAlertService.showToast('Register successfully.', 'Success', 'success');
      this.toastr.success('Register successfully.', 'Success', {closeButton:true, positionClass:'toast-top-right', timeOut:3000}); 
      //this.toastr.success('Register successfully.', 'Success'); 
      this.router.navigateByUrl('/');
       }, (error) =>{
         console.log(error);
       });
   
       // setTimeout(() =>{
       //   this.registerForm.reset();
       // }, 2000)
  }
  
}
