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
        this.image = this.iotDevice.UrlImage != null ? this.iotDevice.UrlImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRqb-7qRdJd04vSy2b83RroyKTaaM3VdfMdIOjIdJ66HgYEuucN0Y9y28rjvAXJkalD8&usqp=CAU";
    }
}
