import { Component } from '@angular/core';
import { User } from 'src/app/user/Interfaces/user.interface';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
    public toggleNavBar: boolean = true;

    public constructor( private authService:AuthService ) {}

    get user(): User {
        return this.authService.user;
    }

    public onChangeToggleNavBar(): void {
        this.toggleNavBar = !this.toggleNavBar;
    }
}
