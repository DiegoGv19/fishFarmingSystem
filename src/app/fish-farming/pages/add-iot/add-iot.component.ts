import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { deviceCreate } from '../../interfaces/deviceCreate.interface';
import { response } from '../../interfaces/response.interface';
import { typeDevicesResponse } from '../../interfaces/typeDevicesResponse.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-add-iot',
  templateUrl: './add-iot.component.html',
  styleUrls: ['./add-iot.component.scss']
})
export class AddIotComponent implements OnInit {
    private sub    : any;
    public alertAddIot: boolean = false;
    public deviceName: string = '';
    public typeDeviceIdSelect: string = '';
    public device: deviceCreate = {
        FishFarmId       :'',
        TypeDeviceId :'',
        Name   :'',
        Description:'',
        DeviceCode :'',
        Image: '',
    }
    subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: ['fish-farm/edit/:id/set-up-iot', this.fishFarmService.fishFarmId],
            image: '',
            template: ''
        }
    ]
    constructor(private fishFarmService: FishFarmService, private router: Router, private activateRoute: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.findTypeDevices();
    }

    public findTypeDevices(): void {
        this.sub = this.activateRoute.params.subscribe(params => {
            this.deviceName = params['type'];
            this.fishFarmService.findTypeDevices().subscribe(
                (typeDevicesResponse: typeDevicesResponse) => {
                if(typeDevicesResponse.Code == '200') {
                        for(var typeDevice of typeDevicesResponse.TypeDevices) {
                            if(typeDevice.Name == this.deviceName) {
                                this.fishFarmService.setTypeDeviceId(typeDevice.Id);
                                this.deviceName = this.typeSensor(typeDevice.Name);
                            }
                        }
                    }
                }
            )
        })
   }

    public typeSensor(typeSensorName: string): string {
        if(typeSensorName == 'disoxi') {
            return 'Oxigeno Disuelto'
        }

        if(typeSensorName == 'temp') {
            return 'Temperatura'
        }

        if(typeSensorName == 'ph') {
            return 'ph'
        }

        if(typeSensorName == 'gate') {
            return 'Compuerta'
        }

        return '';
    }

    public confirmationContinue(confirmation: boolean): void {
        this.alertAddIot = confirmation;
        this.saveIot();
    }

    public continueIoTEvent(confirmation: boolean): void {
        this.alertAddIot = true;
    }

    public saveIot(): void {
        this.alertAddIot = false;
        const formIot = new FormData();
        const Image = this.fishFarmService.iotFile.length != 0 ? this.fishFarmService.iotFile[0] : '';
        formIot.append('Image', Image);
        formIot.append('FishFarmId', this.fishFarmService.fishFarmId);
        formIot.append('TypeDeviceId', this.fishFarmService.typeDeviceId);
        formIot.append('Name', this.device.Name);
        formIot.append('Description', this.device.Description);
        formIot.append('DeviceCode', this.device.DeviceCode);

        this.fishFarmService.createDevice(formIot).subscribe(
            (response: response) => {
                if(response.Code == '200') {
                    this.device.Name = '';
                    this.device.Description = '';
                    this.device.DeviceCode = '';
                    this.device.Image = '';
                }
            }
        )
    }

    public back() {
        this.location.back();
    }
}
