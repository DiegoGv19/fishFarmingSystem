import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { response } from '../../interfaces/response.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

    public logo: string = '';
    public newLogo: string = '';
    public logoToSent: string = '';
    public preview: string = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
    public constructor(private sanitizer: DomSanitizer, private fishFamrService: FishFarmService, private router: Router) { }

    public ngOnInit(): void {}

    public saveLogo(): void {
        if(this.logoToSent != '') {
            const formLogo: FormData = new FormData();
            formLogo.append('Image', this.logoToSent);
            this.fishFamrService.updateLogo(formLogo).subscribe(
                (response: response) => {
                    if(response.Code == '200') {
                        this.fishFamrService.setHidenList(true);
                        this.router.navigate(['fish-farm']);
                    }
                }
            );
        }
    }

    public deleteImage(): void {
        this.newLogo = '';
        this.preview = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
        this.logoToSent = '';
    }

    public captureFile(event: any): void {
      const fileCapture = event.target.files[0];
      this.extraerBase64(fileCapture).then(
          (image: any) => {
              this.preview = image.base;
          }
      )
      this.logoToSent = fileCapture;
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
}
