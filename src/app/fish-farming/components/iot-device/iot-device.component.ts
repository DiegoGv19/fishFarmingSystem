import { Component, Input } from '@angular/core';

import { Device } from '../../interfaces/device.interface';

@Component({
  selector: 'app-iot-device',
  templateUrl: './iot-device.component.html',
  styleUrls: ['./iot-device.component.scss']
})
export class IotDeviceComponent {
    @Input() iotDevice: Device = {
        Name    : '',
        Type    : '',
        UrlImage: ''
    }

    public constructor() {}
    
}
