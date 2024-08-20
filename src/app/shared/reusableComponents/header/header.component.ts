import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Check initial authentication status
    this.authService.checkAuthentication();

    // Subscribe to authentication status changes
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
