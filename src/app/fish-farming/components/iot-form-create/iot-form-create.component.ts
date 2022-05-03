import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { deviceCreate } from '../../interfaces/deviceCreate.interface';
import { FishFarmService } from '../../services/fish-farm.service';
import { response } from '../../interfaces/response.interface';

@Component({
  selector: 'app-iot-form-create',
  templateUrl: './iot-form-create.component.html',
  styleUrls: ['./iot-form-create.component.scss']
})
export class IotFormCreateComponent implements OnInit {
    public connected: boolean = false;
    public errorName: boolean = false;
    public errorCode: boolean = false;
    @Output() continueIoTEvent: EventEmitter<boolean> = new EventEmitter();
    @Input() device: deviceCreate = {
        FishFarmId       :'',
        TypeDeviceId :'',
        Name   :'',
        Description:'',
        DeviceCode :'',
    }
    constructor(private fishFarmService: FishFarmService, private router: Router) {}

    ngOnInit(): void {
    }

    public deviceCreate() {
        if(this.device.Name != '') {
            this.errorName = false;
            this.errorCode = false;
            this.confirmationContinue(true);
        }

        else {
            this.errorName = true;
            this.errorCode = true;
        }
    }

    public confirmationContinue(confirmation: boolean) {
        this.continueIoTEvent.emit(confirmation)
    }
    
}
