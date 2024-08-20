import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ilogin ,IRegister } from '../../models/interfaces/users'
import { MasterService } from '../master/master.service';


//const baseUrl=`${environment.api.baseUrl}/registration`;

@Injectable({
  providedIn: 'root'
})

export class AdminService  {

  private apiURL = "http://localhost:3000/admin";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private master: MasterService,
    private httpClient: HttpClient) { }

  // login(data: Ilogin): Observable<any> {
  //   return this.httpClient.post(`${this.apiURL}/login`, data)
  //     .pipe(
  //       catchError(this.handleError));
  // }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/getUsers`)
    .pipe(
      catchError(this.handleError)
    )
  }  
  

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
