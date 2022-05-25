import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { device } from '../../interfaces/device.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-iot-form',
  templateUrl: './iot-form.component.html',
  styleUrls: ['./iot-form.component.scss']
})
export class IotFormComponent implements OnInit {
    public connected: boolean = false;
    public errorName: boolean = false;
    public errorCode: boolean = false;
    @Output() continueIoTEvent: EventEmitter<boolean> = new EventEmitter();
    @Input() device: device = {
        Name       :'',
        TypeDevice :'',
        ImageUrl   :'',
        Description:'',
        DeviceCode :'',
        IsConnected:'',
        Code       : '',
        Image      : '',
    }
    public preview: string|null = ''; 

    constructor(private fishFarmService: FishFarmService, private router: Router, private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.fishFarmService.resetIotFile();
        this.preview = this.device.ImageUrl == '' ? "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png" : this.device.ImageUrl;
    }

    public editDevice() {
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

    public captureFile(event: any): any {
        this.fishFarmService.resetIotFile();
        const fileCapture = event.target.files[0];
        this.extraerBase64(fileCapture).then(
            (image: any) => {
                this.preview = image.base;
                this.device.ImageUrl = "";
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
        this.device.ImageUrl = "";
        this.preview = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
        this.device.Image = "";
        this.fishFarmService.setDeleteIot(true);
        this.fishFarmService.resetIotFile();
    }
}
