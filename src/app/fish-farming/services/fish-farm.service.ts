import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/main/services/api.service';
import { AuthService } from 'src/app/user/services/auth.service';

import { fishFarm } from '../interfaces/fishFarm.interface';
import { generalConfiguration } from '../interfaces/generalConfiguration.interface';
import { fishFarms } from '../interfaces/fishFarms.interface';
import { response } from '../interfaces/response.interface';
import { deviceAbbreviated } from '../interfaces/deviceAbbreviated.interface';
import { device } from '../interfaces/device.interface';
import { typeFishes } from '../interfaces/typeFishes.interface';
import { fishFarmCreateResponse } from '../interfaces/fishFarmCreateResponse.interface';
import { fishFarmCreate } from '../interfaces/fishFarmCreate.interface';
import { fishFarmAbbreviated } from '../interfaces/fishFarmAbbreviated.interface';

@Injectable({
  providedIn: 'root'
})
export class FishFarmService {

    private _url_find_fish_farms: string = 'FishFarms';
    private _url_find_fish_farms_configuration: string = 'FishFarms/Config';
    private _url_view_fish_farm : string = 'FishFarms';
    private _url_view_device: string = 'FishFarms/Devices';
    private _url_view_type_fishes: string = 'Organization/TypeFishes';
    private _url_fish_farms_create: string = 'FishFarms';
    private _url_fish_farms_delete: string = 'FishFarms';
    private _url_fish_farms_edit: string = 'FishFarms';

    private _fishFarm: fishFarm = {
        Name            : '',
        LastTemperature : 0,
        LastPh          : 0,
        LastDo          : 0,
        Devices         : [],
        Code            : ''
    };
    private _generalConfiguration: generalConfiguration = {
        WayToOpenGates : '',
        TimeToOpenGates: 0,
        Code           : '',
    }
    private _listFishFarmAbbreviated: Array<fishFarmAbbreviated> = [];
    private _fishFarmId : string = '';
    private _deviceId   : string = '';
    private _listCompuertas : Array<deviceAbbreviated> = [];
    private _listDo : Array<deviceAbbreviated> = [];
    private _listTemperature: Array<deviceAbbreviated> = [];
    private _listPh : Array<deviceAbbreviated> = [];
    
    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiService) {}

    public get listFishFarmAbbreviated(): Array<fishFarmAbbreviated> {
        return this._listFishFarmAbbreviated;
    }

    public setListFishFarmAbbreviated(listFishFarmAbbreviated: Array<fishFarmAbbreviated>) {
        this._listFishFarmAbbreviated = listFishFarmAbbreviated;
    }

    public get fishFarm(): fishFarm {
        return this._fishFarm;
    }

    public setFishFarm(fishFarm: fishFarm) {
        this._fishFarm = fishFarm;
    }

    public get fishFarmId(): string {
        return this._fishFarmId;
    }

    public setFishFarmId(fishFarmId: string): void {
        this._fishFarmId = fishFarmId;
    }

    public get deviceId(): string {
        return this._deviceId;
    }

    public setDeviceId(deviceId: string): void {
        this._deviceId = deviceId;
    }

    public get generalConfiguration(): generalConfiguration {
        return this._generalConfiguration;
    }

    public setGeneralConfiguration(generalConfiguration: generalConfiguration): void {
        this._generalConfiguration = generalConfiguration;
    }

    public get listTemperature(): Array<deviceAbbreviated> {
        return this._listTemperature;
    }

    public get listPh(): Array<deviceAbbreviated> {
        return this._listPh;
    }

    public get listDo(): Array<deviceAbbreviated> {
        return this._listDo;
    }
    
    public get listCompuertas(): Array<deviceAbbreviated> {
        return this._listCompuertas;
    }

    /****************************************************************************************** */

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

    public setDevice() {
        this._listTemperature = [];
        this._listPh = [];
        this._listDo = [];
        this._listCompuertas = [];
    }

    /****************************************************************************************** */

    public findFishFarms(): Observable<fishFarms> {
        return this.http.get<fishFarms>(`${this.apiService.urlApi}/${this._url_find_fish_farms}`, { headers: this.authService.httpOptions });
    }

    public findFishFarmConfiguration(): Observable<generalConfiguration> {
        return this.http.get<generalConfiguration>(`${this.apiService.urlApi}/${this._url_find_fish_farms_configuration}`, { headers: this.authService.httpOptions });
    }
    
    public updateFishFarmConfiguration(): Observable<response> {
        return this.http.put<response>(`${this.apiService.urlApi}/${this._url_find_fish_farms_configuration}`, this._generalConfiguration, { headers: this.authService.httpOptions });
    }

    public viewFishFarm(): Observable<fishFarm> {
        return this.http.get<fishFarm>(`${this.apiService.urlApi}/${this._url_view_fish_farm}/${this._fishFarmId}`, { headers: this.authService.httpOptions });
    }

    public viewDevice(): Observable<device> {
        return this.http.get<device>(`${this.apiService.urlApi}/${this._url_view_device}/${this._deviceId}`, { headers: this.authService.httpOptions });
    }

    public findTypeFishes(): Observable<typeFishes> {
        return this.http.get<typeFishes>(`${this.apiService.urlApi}/${this._url_view_type_fishes}`, { headers: this.authService.httpOptions });
    }

    public createFishFarm(fishFarmCreate: fishFarmCreate): Observable<fishFarmCreateResponse> {
        return this.http.post<fishFarmCreateResponse>(`${this.apiService.urlApi}/${this._url_fish_farms_create}`, fishFarmCreate, { headers: this.authService.httpOptions });
    }

    public deleteFishFarm(): Observable<response> {
        return this.http.delete<response>(`${this.apiService.urlApi}/${this._url_fish_farms_delete}/${this._fishFarmId}`, { headers: this.authService.httpOptions });
    }

    public editFishFarm(fishFarmCreate: fishFarmCreate): Observable<fishFarmCreateResponse> {
        return this.http.put<fishFarmCreateResponse>(`${this.apiService.urlApi}/${this._url_fish_farms_edit}/${this._fishFarmId}`, fishFarmCreate, { headers: this.authService.httpOptions });
    }
}
