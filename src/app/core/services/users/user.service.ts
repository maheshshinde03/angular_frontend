import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ilogin ,IRegister } from '../../models/interfaces/users'
import { MasterService } from '../master/master.service';
import { environment } from 'src/environments/environment';
import { APIConstant } from '../../constant/APIConstant';

//const baseUrl=`${environment.api.baseUrl}/registration`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:3000/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private master: MasterService,
    private httpClient: HttpClient) { }

  login(data: Ilogin): Observable<any> {

    return this.master.post(`${environment.apiURL}${APIConstant.user.userlogin}`, data);                  // with using generic master service
   
    // return this.master.post(environment.apiURL + APIConstant.user.userlogin, data);
    
    // return this.httpClient.post(`${this.apiURL}/login`, data)                                   // this is with error handling
    //   .pipe(
    //     catchError(this.handleError));
   
    //    return this.httpClient.post(`${this.apiURL}/login`, data);                             // this is normal api call and error will handle globelly (errorinterceptore)
  }

  registerUser(post:IRegister): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/registration`,post)
    .pipe(
      catchError(this.handleError)
    )
  }  
  

  //this error hadling is easy when application is simple, but for large it's good to create global error interceptor  

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errorMessage = `Backend returned code ${error.status}, body was: `, error.error;
    }
    // Return an observable with a user-facing error message.
    errorMessage += 'Something bad happened; please try again later.'
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
