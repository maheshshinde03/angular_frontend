import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private router: Router){
    }

  login() {
    // Perform login logic
    localStorage.setItem('isLoggedIn', 'true');
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    // Perform logout logic
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();
    sessionStorage.clear();
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['home']);
  }

  checkAuthentication() {
    // Check initial login status
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isAuthenticatedSubject.next(isLoggedIn);
  }
}
