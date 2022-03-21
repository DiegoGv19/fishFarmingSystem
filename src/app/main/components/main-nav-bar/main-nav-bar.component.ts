import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent {

    @Input() toggleNavBar: boolean = true;
    
    public constructor(private authService: AuthService, private router: Router) {}

    public logout() {
        this.authService.logout();
        this.router.navigate(['user/login']);
    }
}
