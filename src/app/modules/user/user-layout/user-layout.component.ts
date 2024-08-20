import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit{


  constructor(
    private router: Router,
    private authService: AuthService){
    }
  ngOnInit(): void {
    
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.authService.logout();
    this.router.navigate(['home']);
  }
  

}
