import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../interfaces/device.interface';

@Component({
  selector: 'app-iot-form',
  templateUrl: './iot-form.component.html',
  styleUrls: ['./iot-form.component.scss']
})
export class IotFormComponent  {

  @Input() iotDevice: Device = {
    Name    : '',
    Type    : '',
    UrlImage: '',
    Id: '',
    Code: ''
  }

  constructor() { }
  showdata(){
    console.log(this.iotDevice.Name);
    console.log(this.iotDevice.Type);
  }
  
}
