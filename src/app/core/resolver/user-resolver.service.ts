import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any>{

  constructor(private adminService : AdminService) { }

  resolve(): Observable<any> {
    return this.adminService.getAllUsers();
  }
}
