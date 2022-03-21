import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private _urlApi: string = 'https://192.168.0.109:44366';

    constructor() { }

    public get urlApi(): string {
        return this._urlApi;
    }
}
