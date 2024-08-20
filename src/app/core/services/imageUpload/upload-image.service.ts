import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private apiURL = "http://localhost:3000/users";
  Data: any;

  constructor( private http: HttpClient) { }

   //upload PAN image
   uploadProfileImage(user_id: number, formData: FormData) {
   // debugger;
   console.log(formData);
   
    return this.http.post(`${this.apiURL}/uploadImage/${user_id}`, formData);
  }

  getProfileImage(userId:number):Observable<Blob>{
    return this.http.get(`${this.apiURL}/getProfileImage/${userId}`, { responseType: 'blob' });
  }
}
