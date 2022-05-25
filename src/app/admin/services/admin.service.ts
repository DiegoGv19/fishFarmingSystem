import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/main/services/api.service';
import { organization } from '../interfaces/organization.interface';
import { Observable, tap, Subject } from 'rxjs';
import * as shajs from 'sha.js';
import { AuthService } from 'src/app/user/services/auth.service';
import { listAccount } from '../interfaces/listAccount.interface';
import { typeFishes } from '../interfaces/typeFishes.interface';
import { response } from '../../fish-farming/interfaces/response.interface';
import { createFish } from '../interfaces/createFish.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private _url_find_accounts: string = 'Organization/Accounts';
    private _url_find_type_fishes: string = 'Organization/TypeFishes';
    private _url_create_organization: string = 'Auth/RegisterOrganization';
    private _url_create_fish: string = 'Organization/TypeFishes';

    private _subjectListAccount:Subject<void> = new Subject<void>();
    private _subjectListFish:Subject<void> = new Subject<void>();
    
    constructor( private http: HttpClient, private authService: AuthService, private apiService: ApiService) {}

    public get subjectListAccount():Subject<void> {
        return this._subjectListAccount;
    }

    public get subjectListFish():Subject<void> {
        return this._subjectListFish;
    }

    public findAccounts(): Observable<listAccount> {
        return this.http.get<listAccount>(`${this.apiService.urlApi}/${this._url_find_accounts}`, { headers: this.authService.httpOptions });
    }
    
    public createOrganization(organization: FormData): Observable<response> {
        return this.http.post<response>(`${this.apiService.urlApi}/${this._url_create_organization}`, organization, { headers: this.authService.httpOptionsMultipart })
        .pipe(
            tap(() => {
                this._subjectListAccount.next();
            })
        )
    }

    public findTypeFish(): Observable<typeFishes> {
        return this.http.get<typeFishes>(`${this.apiService.urlApi}/${this._url_find_type_fishes}`, { headers: this.authService.httpOptions });
    }

    public createFish(fish: createFish): Observable<response> {
        return this.http.post<response>(`${this.apiService.urlApi}/${this._url_create_fish}`, fish, { headers: this.authService.httpOptions })
        .pipe(
            tap(() => {
                this._subjectListFish.next();
            })
        )
    }

}