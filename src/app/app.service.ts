import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class AppService {
    private _API_ENDPOINT: string = 'http://localhost:3000';
    public _LOGIN_API_ENDPOINT: string = this._API_ENDPOINT + '/login';
    public _SIGNUP_API_ENDPOINT: string = this._API_ENDPOINT + '/register';
    public _ALLBOOKS_API_ENDPOINT: string = this._API_ENDPOINT + '/books';
    public _USERBOOKS_API_ENDPOINT: string = this._API_ENDPOINT + '/userbooks';
    public _DELETEUSERBOOK_API_ENDPOINT: string = this._API_ENDPOINT + '/deleteuserbook';
    public _CHANGEAVAILABILITY_API_ENDPOINT: string = this._API_ENDPOINT + '/changeavailability';
    public _USERREQUESTS_API_ENDPOINT: string = this._API_ENDPOINT + '/userrequests';
    public _DELETEUSERREQUESTS_API_ENDPOINT: string = this._API_ENDPOINT + '/deleterequest';
    public _EXCHANGEREQUESTS_API_ENDPOINT: string = this._API_ENDPOINT + '/getexchangerequests';
    public _UPDATEEXCHANGEREQUESTS_API_ENDPOINT: string = this._API_ENDPOINT + '/updateexchangerequest';

    constructor(private http: HttpClient) { }

    createLoginSession(email: any, password: any) {
        return this.http.post<any>(this._LOGIN_API_ENDPOINT, { email: email, password: password });
    }

    registerUser(username: any, email: any, password: any) {
        return this.http.post<any>(this._SIGNUP_API_ENDPOINT, { username: username, email: email, password: password }) // Replace with your actual API endpoint
    }

    getAllBooks() {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`
        });
        return this.http.get<any>(this._ALLBOOKS_API_ENDPOINT, { headers: httpheaders });
    }

    getUserBooks() {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`
        });
        return this.http.get<any>(this._USERBOOKS_API_ENDPOINT, { headers: httpheaders });
    }

    deleteUserBook(bookid: any) {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`,
            'bookid': `${bookid}`
        });
        return this.http.delete<any>(this._DELETEUSERBOOK_API_ENDPOINT, { headers: httpheaders });
    }

    changeAvailability(bookid: any) {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`,
            'bookid': `${bookid}`
        });
        return this.http.put<any>(this._CHANGEAVAILABILITY_API_ENDPOINT, {}, { headers: httpheaders });
    }

    getUserRequests() {
        let emailid = window.sessionStorage.getItem('emailid');
        let username = window.sessionStorage.getItem('username');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`,
            'username': `${username}`
        });
        return this.http.get<any>(this._USERREQUESTS_API_ENDPOINT, { headers: httpheaders });
    }

    deleteUserRequest(exchangeid: any) {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`,
            'exchangeid': `${exchangeid}`
        });
        return this.http.delete<any>(this._DELETEUSERREQUESTS_API_ENDPOINT, { headers: httpheaders });
    }

    getExchangeRequests() {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`,
        });
        return this.http.get<any>(this._EXCHANGEREQUESTS_API_ENDPOINT, { headers: httpheaders });
    }

    updateExchangeStatus(exchangeid: any, updatedstatus:string) {
        let emailid = window.sessionStorage.getItem('emailid');
        let token = window.sessionStorage.getItem('token');
        let httpheaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'emailid': `${emailid}`,
            'exchangeid': `${exchangeid}`,
            'updatedstatus': `${updatedstatus}`
        });
        return this.http.put<any>(this._UPDATEEXCHANGEREQUESTS_API_ENDPOINT, {}, { headers: httpheaders });
    }
}