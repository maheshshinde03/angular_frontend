import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/users/user.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    this.userService.login(this.loginForm.value).subscribe((data: any) => {
      console.log('successful', data);
      localStorage.setItem('userId', data.response.rows[0].sr);
      localStorage.setItem('token', data.token);
      this.authService.login();
      this.router.navigateByUrl('/user');
    });

    // },(error) => {
    //   //if you use global interceptor we dont need to mention this error block, error message automatically throw from error interceptor
    //   this.errorMessage = error;
    //   console.log('error', error);
    // })

  }


}
