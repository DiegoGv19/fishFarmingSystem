import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private _urlApi: string = 'https://localhost:7082';

    constructor() { }

    public get urlApi(): string {
        return this._urlApi;
    }
}
