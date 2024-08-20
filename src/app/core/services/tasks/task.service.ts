import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITask } from '../../models/interfaces/task'
import { MasterService } from '../master/master.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://localhost:3000/tasks";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private master: MasterService,
    private httpClient: HttpClient) { }

    createNewTask(data:ITask): Observable<any> {
      return this.httpClient.post(`${this.apiURL}/addTask`,data)
      .pipe(
        catchError(this.handleError)
      )
    }  
  
    getAlltasks(userId:any): Observable<any>{
      console.log(userId);
      return this.httpClient.get(`${this.apiURL}/getAllTask/${userId}`)
      .pipe(
        catchError(this.handleError)
      )
    }

    getTaskByTd(task_id:any): Observable<any>{
      return this.httpClient.get(`${this.apiURL}/getTaskByTd/${task_id}`)
      .pipe(
        catchError(this.handleError)
      )
    }
  
    UpdateTask(data:ITask): Observable<any>{
      return this.httpClient.put(`${this.apiURL}/updateTask`, data)
      .pipe(
        catchError(this.handleError)
      )
    }
  
    deleteTask(id:any): Observable<any>{
      return this.httpClient.delete(`${this.apiURL}/deleteTask/${id}`)
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
