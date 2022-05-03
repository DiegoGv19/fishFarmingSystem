import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-iot-add',
  templateUrl: './iot-add.component.html',
  styleUrls: ['./iot-add.component.scss']
})
export class IotAddComponent {

    @Input() typeDevice: string = '';
}
