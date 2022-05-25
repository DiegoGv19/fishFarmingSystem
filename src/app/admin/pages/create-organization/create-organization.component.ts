import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createOrganization } from '../../interfaces/createOrganization.interface';
import * as shajs from 'sha.js';
import { response } from '../../../fish-farming/interfaces/response.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationPageComponent implements OnInit {
    public preview: string|null = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
    public errorName: boolean = false;
    public errorEmil: boolean = false;
    public errorEmilExist: boolean = false;
    public errorPassword: boolean = false;
    public errorNameAdmin: boolean = false;
    public errorPhone: boolean = false;
    public image: string = '';
    public organization: createOrganization = {
        OrganizationName: '',
        Logo: '',
        Email: '',
        Password: '',
        AdminName: '',
        AdminPhone: ''
    }

    constructor(private sanitizer: DomSanitizer, private adminService: AdminService) { }

    ngOnInit(): void {
    }
    public captureFile(event: any): any {
        const fileCapture = event.target.files[0];
        this.extraerBase64(fileCapture).then(
            (image: any) => {
                this.preview = image.base;
            }
        )
        this.image = fileCapture;
    }

    public validateOrganization(): void {
        if(this.organization.OrganizationName != '') {
            this.errorName = false;
            if(this.organization.Email != '') {
                this.errorEmil = false;
                if(this.organization.Password != '') {
                    this.errorPassword = false;
                    const formOrganization = new FormData();
                    formOrganization.append('OrganizationName', this.organization.OrganizationName);
                    formOrganization.append('Logo', this.image);
                    formOrganization.append('Email', this.organization.Email);
                    formOrganization.append('Password', shajs('sha256').update(this.organization.Password).digest('hex'));
                    formOrganization.append('AdminName', this.organization.AdminName);
                    formOrganization.append('AdminPhone', this.organization.AdminPhone);
                    this.createOrganization(formOrganization);
                }
                else {
                    this.errorPassword = true;
                }
            }
            else {
                this.errorEmil = true;
            }
        }
        else {
            this.errorName = true;
        }
    }

    public createOrganization(formOrganization: FormData): void {
        this.errorEmilExist = false;
        this.adminService.createOrganization(formOrganization).subscribe(
            (response: response) => {
                if(response.Code == '200') {
                    this.organization.OrganizationName = '';
                    this.organization.Email = '';
                    this.organization.Password = '';
                    this.organization.Logo = "";
                    this.organization.AdminName = "";
                    this.organization.AdminPhone = "";
                    this.preview = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
                    this.image = '';
                }
            },
            (error) => {
                if(error.error.Code == '422' && error.error.Type == 'invalid_email') {
                    this.errorEmilExist = true;
                }
            }
        )
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

    public deleteImage(): void {
        this.preview = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
        this.organization.Logo = "";
        this.image = '';
    }
}
