import { Component, Input, OnInit } from '@angular/core';
import { device } from '../../interfaces/device.interface';

@Component({
  selector: 'app-iot-form',
  templateUrl: './iot-form.component.html',
  styleUrls: ['./iot-form.component.scss']
})
export class IotFormComponent implements OnInit {
    public connected = false
    @Input() device: device = {
        Name       :'',
        TypeDevice :'',
        ImageUrl   :'',
        Description:'',
        DeviceCode :'',
        IsConnected:'',
        Code       : ''
    }
    constructor() { 
        this.connected = this.device.IsConnected == true ? true : false
    }

    ngOnInit(): void {
    }

    public editDevice() {

    }
}
