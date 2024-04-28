import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class AppService {
    private _API_ENDPOINT: string = 'http://localhost:3000';
    public _LOGIN_API_ENDPOINT: string = this._API_ENDPOINT+'/login';
    public _SIGNUP_API_ENDPOINT: string = this._API_ENDPOINT+'/register';
}