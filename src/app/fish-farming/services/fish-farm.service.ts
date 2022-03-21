import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/main/services/api.service';
import { AuthService } from 'src/app/user/services/auth.service';

import { findFishFarm } from '../interfaces/findFishFarm.interface';
import { fishFarm } from '../interfaces/fishFarm.interface';
import { Device } from '../interfaces/device.interface';

@Injectable({
  providedIn: 'root'
})
export class FishFarmService {

    private _url_find_fish_farms: string = 'FishFarms';
    private _url_view_fish_farm : string = 'FishFarms';

    private _listTemperature: Array<Device> = [];
    private _listPh : Array<Device> = [];
    private _listDo : Array<Device> = [];
    private _listCompuertas : Array<Device> = [];
    private _fishFarm: fishFarm = {
        Name            : '',
        LastTemperature : 0,
        LastPh          : 0,
        LastDo          : 0,
        Devices         : [],
        Code            : ''
    };


    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiService) { }

    public setFishFarm(fishFarm: fishFarm) {
        this._fishFarm = fishFarm;
    }

    public get fishFarm(): fishFarm {
        return this._fishFarm;
    }

    public resetFishFarm() {
        this._fishFarm = {
            Name            : '',
            LastTemperature : 0,
            LastPh          : 0,
            LastDo          : 0,
            Devices         : [],
            Code            : ''
        };
    }

    public get listTemperature(): Array<Device> {
        return this._listTemperature;
    }

    public get listPh(): Array<Device> {
        return this._listPh;
    }

    public get listDo(): Array<Device> {
        return this._listDo;
    }
    
    public get listCompuertas(): Array<Device> {
        return this._listCompuertas;
    }

    public getDevices() {
        for( let device of this.fishFarm.Devices) {
            if(device.Type == 'temp') {
                this._listTemperature.push(device);
            }
            if(device.Type == 'ph') {
                this._listPh.push(device);
            }
            if(device.Type == 'do') {
                this._listDo.push(device);
            }
            if(device.Type == 'com') {
                this._listCompuertas.push(device);
            }
        }
    }

    public setDevice() {
        this._listTemperature = [];
        this._listPh = [];
        this._listDo = [];
        this._listCompuertas = [];
    }

    public findFishFarms(): Observable<findFishFarm> {
        return this.http.get<findFishFarm>(`${this.apiService.urlApi}/${this._url_find_fish_farms}`, { headers: this.authService.httpOptions });
    }

    public viewFishFarm(fishFarmId: string): Observable<fishFarm> {
        return this.http.get<fishFarm>(`${this.apiService.urlApi}/${this._url_view_fish_farm}/${fishFarmId}`, { headers: this.authService.httpOptions });
    }
}