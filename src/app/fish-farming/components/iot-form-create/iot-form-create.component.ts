import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { deviceCreate } from '../../interfaces/deviceCreate.interface';
import { FishFarmService } from '../../services/fish-farm.service';
import { DomSanitizer } from '@angular/platform-browser';

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
        FishFarmId   :'',
        TypeDeviceId :'',
        Name         :'',
        Description  :'',
        DeviceCode   :'',
        Image        : ''
    }
    public preview: string|null = ''; 

    constructor(private fishFarmService: FishFarmService, private router: Router, private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.preview = this.device.Image == '' ? "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png" : this.device.Image; 
        console.log(this.preview);
    }

    public deviceCreate() {
        if(this.device.Name != '') {
            this.errorName = false;
            this.errorCode = false;
            this.confirmationContinue(true);
            this.preview = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
        }

        else {
            this.errorName = true;
            this.errorCode = true;
        }
    }

    public confirmationContinue(confirmation: boolean) {
        this.continueIoTEvent.emit(confirmation)
    }

    public captureFile(event: any): any {
        const fileCapture = event.target.files[0];
        this.extraerBase64(fileCapture).then(
            (image: any) => {
                this.preview = image.base;
            }
        )
        this.fishFarmService.setIotFile(fileCapture);
    }
    
    public extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
        try {
          const unsafeImg = window.URL.createObjectURL($event);
          const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
          const reader = new FileReader();
          reader.readAsDataURL($event);
          reader.onload = () => {
            resolve({
              base: reader.result
            });
          };
          reader.onerror = error => {
            resolve({
              base: null
            });
          };
    
        } catch (e) {
          return null;
        }
      })
      
    public deleteImage()
    {
        this.preview = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
        this.device.Image = "";
        this.fishFarmService.resetIotFile();
    }
}
