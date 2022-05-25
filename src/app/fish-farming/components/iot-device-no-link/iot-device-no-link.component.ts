import { Component, Input, OnInit } from '@angular/core';

import { deviceAbbreviated } from '../../interfaces/deviceAbbreviated.interface';

@Component({
  selector: 'app-iot-device-no-link',
  templateUrl: './iot-device-no-link.component.html',
  styleUrls: ['./iot-device-no-link.component.scss']
})
export class IotDeviceNoLinkComponent implements OnInit {
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
