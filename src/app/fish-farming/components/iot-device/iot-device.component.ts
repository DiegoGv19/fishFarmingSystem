import { Component, Input } from '@angular/core';

import { deviceAbbreviated } from '../../interfaces/deviceAbbreviated.interface';

@Component({
  selector: 'app-iot-device',
  templateUrl: './iot-device.component.html',
  styleUrls: ['./iot-device.component.scss']
})
export class IotDeviceComponent {
    connected:Boolean = false
    image:string = ''
    @Input() iotDevice: deviceAbbreviated = {
        Id      : '',
        Name    : '',
        Type    : '',
        UrlImage: '',
        IsConnected: null
    }

    public constructor() {
        this.connected = this.iotDevice.IsConnected == true ? true : false
        this.image = this.iotDevice.UrlImage != '' ? this.iotDevice.UrlImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRqb-7qRdJd04vSy2b83RroyKTaaM3VdfMdIOjIdJ66HgYEuucN0Y9y28rjvAXJkalD8&usqp=CAU"
    }
}
