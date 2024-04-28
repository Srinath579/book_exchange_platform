// user-profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  public _GETUSERDETAILS_API_ENDPOINT: string = 'http://localhost:3000';
  public _GETUSERBOOKS_API_ENDPOINT: string = 'http://localhost:3001';

  constructor(private http: HttpClient) {
    
  }

  getUserDetails() {
    const userId = sessionStorage.getItem('userid');
    const token = sessionStorage.getItem('token');
    return this.http.get<any>(this._GETUSERDETAILS_API_ENDPOINT+'/user/' + userId, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  getBooksForUser() {
    const userId = sessionStorage.getItem('userid');
    const token = sessionStorage.getItem('token');
    return this.http.get<any>(this._GETUSERBOOKS_API_ENDPOINT+'/books?userId=' + userId + '&includeUserId=true', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  createBook(formData: any) {
    const userId = sessionStorage.getItem('userid');
    const token = sessionStorage.getItem('token');
    return this.http.post<any>(this._GETUSERBOOKS_API_ENDPOINT+'/books', formData, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }
}
