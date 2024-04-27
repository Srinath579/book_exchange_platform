import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class AppService {
    public _LOGIN_API_ENDPOINT: string = 'http://localhost:3000/login';
    public _SIGNUP_API_ENDPOINT: string = 'http://localhost:3000/register';

    constructor(private httpClient: HttpClient) { }

    CreateLoginSession(email: any, password: any) {
        let httpParams = new HttpParams();
        let httpHeaders = new HttpHeaders();
        const usercredentials = { email: email, password: password }
        httpHeaders = httpHeaders.set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
            .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        return this.httpClient.post(this._LOGIN_API_ENDPOINT, { email: email, password: password })
    }
    RegisterUser(email: any, password: any) {
        let httpParams = new HttpParams();
        let httpHeaders = new HttpHeaders();
        const usercredentials = { email: email, password: password }
        httpHeaders = httpHeaders.set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
            .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        return this.httpClient.post(this._SIGNUP_API_ENDPOINT, { email: email, password: password })
    }
}