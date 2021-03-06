import { Component, Input, OnInit } from '@angular/core';

import { deviceAbbreviated } from '../../interfaces/deviceAbbreviated.interface';

@Component({
  selector: 'app-iot-device',
  templateUrl: './iot-device.component.html',
  styleUrls: ['./iot-device.component.scss']
})
export class IotDeviceComponent implements OnInit {
    public connected:Boolean = false
    public image:string = ''
    @Input() iotDevice: deviceAbbreviated = {
        Id      : '',
        Name    : '',
        Type    : '',
        UrlImage: '',
        IsConnected: null,
    }

    public constructor() {}

    public ngOnInit() {
        this.connected = this.iotDevice.IsConnected == true ? true : false;
        this.image = this.iotDevice.UrlImage != null ? this.iotDevice.UrlImage : "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
    }
}
