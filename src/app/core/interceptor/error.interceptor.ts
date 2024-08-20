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
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private router: Router,
    private toastr: ToastrService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        // Handle error here
        // console.log('catch error', error);
        // if(error.status === 404 ){
        //   return throwError('URL not found');
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
            this.toastr.error(`${error.statusText}`, 'URL not found');
            this.router.navigateByUrl('/auth/login');
            break;
          default:
            // Handle other errors
            break;
        }
        
        // Optionally, you can re-throw the error to propagate it further
        return throwError(error);
      })
    );
  }
}
