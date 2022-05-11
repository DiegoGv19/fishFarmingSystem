import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscriber } from 'rxjs';
import { tap } from 'rxjs/operators';

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
import { deviceCreate } from '../interfaces/deviceCreate.interface';
import { typeDevicesResponse } from '../interfaces/typeDevicesResponse.interface';
import { fishFarmConfig } from '../interfaces/fishFarmConfig.interfacce';
import { parameters } from '../interfaces/parameters.interface';
import { histories } from '../interfaces/histories.interface';
import { historyView } from '../interfaces/historyView.interface';
import { typeSensorsResponse } from '../interfaces/typeSensorsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class FishFarmService {

    private _url_general_configuration_view: string = 'FishFarms/Config';
    private _url_general_configuration_edit: string = 'FishFarms/Config';
    private _url_fish_farms_find: string = 'FishFarms';
    private _url_fish_farm_view : string = 'FishFarms';
    private _url_fish_farm_view_Config : string = 'FishFarms';
    private _url_fish_farm_view_resume: string = 'FishFarms'
    private _url_fish_farms_create: string = 'FishFarms';
    private _url_fish_farms_delete: string = 'FishFarms';
    private _url_fish_farms_edit: string = 'FishFarms';
    private _url_device_create: string = 'FishFarms/Devices';
    private _url_device_edit: string = 'FishFarms/Devices';
    private _url_device_view: string = 'FishFarms/Devices';
    private _url_device_delete: string = 'FishFarms/Devices';
    private _url_parameter_edit: string = 'FishFarms/UpdateParameterRange';
    private _url_type_fishes_view: string = 'Organization/TypeFishes';
    private _url_type_devices_view: string = 'Organization/TypeDevices';
    private _url_type_sensors_view: string = 'Organization/TypeSensors';
    private _url_history_view_list: string = 'FishFarms';
    private _url_history_view: string = 'FishFarms/History';

    private _fishFarm: fishFarm = {
        Name            : '',
        LastTemperature : 0,
        LastPh          : 0,
        LastDo          : 0,
        Devices         : [],
        Code            : ''
    };

    private _fishFarmConfig: fishFarmConfig = {
        Name   : '',
        MinTemp: 0,
        MaxTemp: 0,
        MinPh  : 0,
        MaxPh  : 0,
        MinDo  : 0,
        MaxDo  : 0,
        Devices: [],
        Code   : ''
    };
    
    private _generalConfiguration: generalConfiguration = {
        WayToOpenGates : '',
        TimeToOpenGates: 0,
        Code           : '',
    }

    private _subjectListFishFarm:Subject<void> = new Subject<void>();
    private _subjectListIot:Subject<void> = new Subject<void>();
    private _subjectHistory:Subject<void> = new Subject<void>();
    private _fishFarmId : string = '';
    private _iotFile: any = [];
    private _deleteIot: boolean = false;
    private _deviceId   : string = '';
    private _historyId  : string = '';
    private _historyFilterId: string = '';
    private _typeDeviceId: string = '';
    private _typeDeviceName: string = '';
    private _listCompuertas : Array<deviceAbbreviated> = [];
    private _listDo : Array<deviceAbbreviated> = [];
    private _listTemperature: Array<deviceAbbreviated> = [];
    private _listPh : Array<deviceAbbreviated> = [];
    
    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiService) {}

    public get subjectListFishFarm():Subject<void> {
        return this._subjectListFishFarm;
    }

    public get subjectListIot():Subject<void> {
        return this._subjectListIot;
    }

    public get subjectHistory():Subject<void> {
        return this._subjectHistory;
    }

    public SetsubjectHistory(): void {
        this.subjectHistory.next();
    }

    public get fishFarm(): fishFarm {
        return this._fishFarm;
    }

    public setFishFarm(fishFarm: fishFarm) {
        this._fishFarm = fishFarm;
    }

    public get fishFarmConfig(): fishFarmConfig {
        return this._fishFarmConfig;
    }

    public setFishFarmConfig(fishFarmConfig: fishFarmConfig) {
        this._fishFarmConfig = fishFarmConfig;
    }

    public get fishFarmId(): string {
        return this._fishFarmId;
    }

    public setFishFarmId(fishFarmId: string): void {
        this._fishFarmId = fishFarmId;
    }

    public get iotFile(): any {
        return this._iotFile;
    }

    public setIotFile(iotFile: any): void {
        this._iotFile.push(iotFile);
    }

    public resetIotFile(): void {
        this._iotFile = [];
    }

    public get deleteIot(): boolean {
        return this._deleteIot;
    }

    public setDeleteIot(deleteIot: boolean): void {
        this._deleteIot = deleteIot;
    }

    public get deviceId(): string {
        return this._deviceId;
    }

    public setDeviceId(deviceId: string): void {
        this._deviceId = deviceId;
    }

    public get historyId(): string {
        return this._historyId;
    }

    public setHistoryId(historyId: string): void {
        this._historyId = historyId;
    }

    public get historyFilterId(): string {
        return this._historyFilterId;
    }

    public setHistoryFilterId(historyFilterId: string): void {
        this._historyFilterId = historyFilterId;
    }

    public get typeDeviceName(): string {
        return this._typeDeviceName;
    }

    public setTypeDeviceName(typeDeviceName: string): void {
        this._typeDeviceName = typeDeviceName;
    }

    public get typeDeviceId(): string {
        return this._typeDeviceId;
    }

    public setTypeDeviceId(typeDeviceId: string): void {
        this._typeDeviceId = typeDeviceId;
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

    public getDevicesConfig() {
        for( let device of this.fishFarmConfig.Devices) {
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
        return this.http.get<fishFarms>(`${this.apiService.urlApi}/${this._url_fish_farms_find}`, { headers: this.authService.httpOptions });
    }

    public findFishFarmConfiguration(): Observable<generalConfiguration> {
        return this.http.get<generalConfiguration>(`${this.apiService.urlApi}/${this._url_general_configuration_view}`, { headers: this.authService.httpOptions });
    }
    
    public updateFishFarmConfiguration(): Observable<response> {
        return this.http.put<response>(`${this.apiService.urlApi}/${this._url_general_configuration_edit}`, this._generalConfiguration, { headers: this.authService.httpOptions });
    }

    public viewFishFarm(): Observable<fishFarm> {
        return this.http.get<fishFarm>(`${this.apiService.urlApi}/${this._url_fish_farm_view}/${this._fishFarmId}`, { headers: this.authService.httpOptions });
    }

    public viewFishFarmConfig(): Observable<fishFarmConfig> {
        return this.http.get<fishFarmConfig>(`${this.apiService.urlApi}/${this._url_fish_farm_view_Config}/${this._fishFarmId}/Config`, { headers: this.authService.httpOptions });
    }

    public viewFishFarmAbbreviated(): Observable<fishFarmCreate> {
        return this.http.get<fishFarmCreate>(`${this.apiService.urlApi}/${this._url_fish_farm_view_resume}/${this._fishFarmId}/Resume`, { headers: this.authService.httpOptions });
    }

    public createFishFarm(fishFarmCreate: fishFarmCreate): Observable<fishFarmCreateResponse> {
        return this.http.post<fishFarmCreateResponse>(`${this.apiService.urlApi}/${this._url_fish_farms_create}`, fishFarmCreate, { headers: this.authService.httpOptions })
        .pipe(
            tap(() => {
                this._subjectListFishFarm.next();
            })
        );
    }

    public deleteFishFarm(): Observable<response> {
        return this.http.delete<response>(`${this.apiService.urlApi}/${this._url_fish_farms_delete}/${this._fishFarmId}`, { headers: this.authService.httpOptions })
        .pipe(
            tap(() => {
                this._subjectListFishFarm.next();
            })
        );
    }

    public editFishFarm(fishFarmCreate: fishFarmCreate): Observable<response> {
        return this.http.put<response>(`${this.apiService.urlApi}/${this._url_fish_farms_edit}/${this._fishFarmId}`, fishFarmCreate, { headers: this.authService.httpOptions })
        .pipe(
            tap(() => {
                this._subjectListFishFarm.next();
            })
        )
    }
    
    public viewDevice(): Observable<device> {
        return this.http.get<device>(`${this.apiService.urlApi}/${this._url_device_view}/${this._deviceId}`, { headers: this.authService.httpOptions });
    }

    public createDevice(device: any): Observable<response> {
        return this.http.post<response>(`${this.apiService.urlApi}/${this._url_device_create}`, device, { headers: this.authService.httpOptionsMultipart })
        .pipe(
            tap(() => {
                this._subjectListIot.next();
            })
        )
    }

    public editDevice(device: any): Observable<response> {
        return this.http.put<response>(`${this.apiService.urlApi}/${this._url_device_edit}/${this._deviceId}`, device, { headers: this.authService.httpOptionsMultipart })
        .pipe(
            tap(() => {
                this._subjectListIot.next();
            })
        )
    }

    public deleteDevice(): Observable<response> {
        return this.http.delete<response>(`${this.apiService.urlApi}/${this._url_device_delete}/${this._deviceId}`, { headers: this.authService.httpOptions })
        .pipe(
            tap(() => {
                this._subjectListIot.next();
            })
        )
    }

    public findTypeFishes(): Observable<typeFishes> {
        return this.http.get<typeFishes>(`${this.apiService.urlApi}/${this._url_type_fishes_view}`, { headers: this.authService.httpOptions });
    }

    public findTypeDevices(): Observable<typeDevicesResponse> {
        return this.http.get<typeDevicesResponse>(`${this.apiService.urlApi}/${this._url_type_devices_view}`, { headers: this.authService.httpOptions });
    }

    public findTypeSensors(): Observable<typeSensorsResponse> {
        return this.http.get<typeSensorsResponse>(`${this.apiService.urlApi}/${this._url_type_sensors_view}`, { headers: this.authService.httpOptions });
    }

    public editParameters(parameters: parameters): Observable<response> {
        return this.http.put<response>(`${this.apiService.urlApi}/${this._url_parameter_edit}`, parameters, { headers: this.authService.httpOptions });
    }

    public findHistoryList(): Observable<histories> {
        return this.http.get<histories>(`${this.apiService.urlApi}/${this._url_history_view_list}/${this.fishFarmId}/History?TypeDeviceId=${this._historyFilterId}`, { headers: this.authService.httpOptions });
    }

    public findHistory(): Observable<historyView> {
        return this.http.get<historyView>(`${this.apiService.urlApi}/${this._url_history_view}/${this._historyId}`, { headers: this.authService.httpOptions });
    }
}
