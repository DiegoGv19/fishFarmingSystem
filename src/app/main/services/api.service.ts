import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private _urlApi: string = environment.baseUrl;

    constructor() { }

    public get urlApi(): string {
        return this._urlApi;
    }
}
