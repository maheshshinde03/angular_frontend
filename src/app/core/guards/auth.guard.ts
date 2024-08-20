import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  else{
    alert('not logged in');
    router.navigate(['/auth/login']);
    return false;
  }
 
};
