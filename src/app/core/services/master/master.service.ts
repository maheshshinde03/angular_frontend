import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {} from '../../models/interfaces/users'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  get<T>(url: string) : Observable<T>{     // This is Generic Service. T denote it's generic and handle any type of data
    return this.http.get<T>(url);
  }

  post<T>(url : string, body: any): Observable<T>{
    return this.http.post<T>(url, body);
  }

  put<T>(url : string, body: any): Observable<T>{
    return this.http.put<T>(url, body);
  }

  delete<T>(url : string): Observable<T>{
    return this.http.delete<T>(url);           // For delete u can't send body, u can send parameter through url
  }
}
