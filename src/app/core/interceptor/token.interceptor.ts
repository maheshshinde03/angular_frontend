import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private toastr: ToastrService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request comes first here');
    const token = localStorage.getItem('token');
    const cloneRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    //return next.handle(cloneRequest);  
    return next.handle(cloneRequest).pipe(      // If u want to handle error in this interceptor use this code otherwise error interceptor is avialable
      catchError((error: HttpErrorResponse) =>{
          console.log('catch error', error);
          // if(error.status === 404 ){
          //   //return throwError('URL not found');
          //   this.toastr.error(`${error.statusText}`, 'URL not found');
          //   this.router.navigateByUrl('/auth/login');
          // }

           // Handle error based on status code
         switch (error.status) {
          case 401: // Unauthorized
            // Redirect to login page or display unauthorized message
            this.toastr.error(`${error.statusText}`, 'Not Authorized');
            this.router.navigateByUrl('/auth/login');
            break;
          case 404: // Not Found
            // Handle not found error
            this.toastr.error(`${error.message[0]}`);
            //this.toastr.error(`${error.statusText}`, 'URL not found');
            //this.router.navigateByUrl('/auth/login');
            break;
          default:
            // Handle other errors
            break;
        }


          return throwError('something went wrong');     //whatever i'm throwing from here, it'll catch in component err blovl
      })
    )     
  }
}
