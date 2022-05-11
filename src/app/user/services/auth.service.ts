import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import * as shajs from 'sha.js';

import { ApiService } from 'src/app/main/services/api.service';

import { Auth } from '../Interfaces/auth.interface';
import { User } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private _url_login: string = 'Auth/Login';
    private _user: User | undefined;
    private _auth: Auth | undefined;
    private _httpOptions: HttpHeaders = new HttpHeaders({
        "Content-Type" : "application/json",
    });
    private _httpOptionsMultipart: HttpHeaders = new HttpHeaders({})
    
    constructor( private http: HttpClient, private apiService: ApiService) {}

    public get user(): User {
      return { ...this._user! };
    }

    public get httpOptions(): HttpHeaders {
        return this._httpOptions;
    }

    public get httpOptionsMultipart(): HttpHeaders {
        return this._httpOptionsMultipart;
    }

    public setAuth(auth: Auth): void {
        auth.Password =shajs('sha256').update(auth.Password).digest('hex');
        this._auth = auth;
    }

    public setHttpOptions(): void {
        this._httpOptions = new HttpHeaders({
            "Content-Type" : "application/json",
            "Authorization":  `Bearer ${this._user!.Token}`
        });
    }

    public setHhttpOptionsMultipart(): void {
        this._httpOptionsMultipart = new HttpHeaders({
            "Authorization":  `Bearer ${this._user!.Token}`
        });
    }

    /********************************************************************** */

    public loadAuth(): Auth {
                
        var email: any = localStorage.getItem('Email');
        var password: any = localStorage.getItem('Password');
        var auth: Auth = {
            Email: email,
            Password: password
        }

        return auth;
    }

    public logout(): void {
        this._user = undefined;
        this._auth = undefined;
        localStorage.setItem('Email', '');
        localStorage.setItem('Password', '');
    }


    /********************************************************************** */

    public verifyAuth(): boolean {
        if(this._auth!.Email == '' && this._auth!.Password == '') {
            return false
        }

        return true;
    }

    public verifyAuthentication(): Observable<boolean> {
        if( !localStorage.getItem('Email') && !localStorage.getItem('Password') ) {
            return of(false);
        }

        this._auth = this.loadAuth();
        
        return this.http.post<User>(`${this.apiService.urlApi}/${this._url_login}`, JSON.stringify(this._auth), { headers: this._httpOptions })
        .pipe(
            map( user => {
                this._user = user;
                this.setHttpOptions();
                this.setHhttpOptionsMultipart();
                return true;
            })
        );
    }

    public login(): Observable<User> {
        return this.http.post<User>(`${this.apiService.urlApi}/${this._url_login}`, JSON.stringify(this._auth), { headers: this._httpOptions })
        .pipe(
            tap( user => this._user = user ),
            tap( user => localStorage.setItem('Email', this._auth!.Email) ),
            tap( user => localStorage.setItem('Password', this._auth!.Password) )
        );
    }
}
