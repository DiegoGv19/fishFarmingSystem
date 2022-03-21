import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/main/services/api.service';
import { organization } from '../interfaces/organization.interface';
import { Observable } from 'rxjs';
import * as shajs from 'sha.js';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private _url_register_organization: string = 'Auth/RegisterOrganization';
    private _httpOptions: HttpHeaders = new HttpHeaders({
      "Content-Type" : "application/json",
  });

    private _organization: organization | undefined;
    
    constructor( private http: HttpClient, private apiService: ApiService) {}

    public setOrganization(organization: organization): void {
        organization.Password =shajs('sha256').update(organization.Password).digest('hex');
        organization.LogoUrl = 'https://igoumicdn.com/uploads/portfolio/Fish-Farm-Logo.jpg';
        this._organization = organization;
    }

    public registerOrganization(): Observable<organization>{
        return this.http.post<organization>(`${this.apiService.urlApi}/${this._url_register_organization}`, JSON.stringify(this._organization), { headers: this._httpOptions });
    }
}