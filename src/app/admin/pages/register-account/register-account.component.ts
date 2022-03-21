import { Component } from '@angular/core';

import { AdminService } from '../../services/admin.service';

import { organization } from '../../interfaces/organization.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent {
    public organization: organization = {
        OrganizationName: '',
        LogoUrl: '',
        Email: '',
        Password: ''
    }

    public constructor(private adminService: AdminService, private router: Router) {}
    
    public registerOrganization() {
        this.adminService.setOrganization({...this.organization});
        this.adminService.registerOrganization().subscribe(
            () => {
                this.router.navigate(['./user/login']);
            }
        )
    }
}
