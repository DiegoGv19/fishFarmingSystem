import { Component } from '@angular/core';

import { Device } from '../../interfaces/device.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-fish-farm-iot',
  templateUrl: './fish-farm-iot.component.html',
  styleUrls: ['./fish-farm-iot.component.scss']
})
export class FishFarmIotComponent {

    public constructor(private fishFarmService: FishFarmService) {}

    public get listTemperature() {
        return this.fishFarmService.listTemperature;
    }
    public get listPh() {
        return this.fishFarmService.listPh;
    }

    public get listDo() {
        return this.fishFarmService.listDo;
    }
    public get listCompuertas() {
        return this.fishFarmService.listCompuertas;
    }
  
}
