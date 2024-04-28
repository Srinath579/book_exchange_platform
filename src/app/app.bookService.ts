import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
    public _BOOKSGETCREATE_API_ENDPOINT: string = 'http://localhost:3001/books';

  constructor(private http: HttpClient) { }

  getBooksForCurrentUser(): Observable<any[]> {
    const userId = sessionStorage.getItem('userid');
    if (userId !== null) {
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      // Pass userId as query parameter instead of in the request body
      const options = { headers };
      return this.http.get<any[]>(`${this._BOOKSGETCREATE_API_ENDPOINT}?userId=${userId}&includeUserId=false`, options)
        .pipe(
          catchError(error => {
            console.error('Error retrieving books:', error);
            return throwError('Error retrieving books');
          })
        );
    } else {
      return throwError('User ID is null');
    }
  }
  

  createBook(bookData: any): Observable<any> {
    const userId = sessionStorage.getItem('userid');
    if (userId === null) {
      return throwError('User ID is null'); // Throw an error if userId is null
    }
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const data = { ...bookData, owner_id: parseInt(userId) };
    return this.http.post(`${this._BOOKSGETCREATE_API_ENDPOINT}`, data, { headers });
  }

  // Implement other CRUD operations for books as needed
}
