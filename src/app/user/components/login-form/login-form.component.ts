import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../Interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    
    public _verifyLogin: boolean = false;
    public auth: Auth = {
        Email: '',
        Password: ''
    }

    constructor( private router: Router, private authService: AuthService ) {}

    public get verifyLogin(): boolean {
        return this._verifyLogin;
    }

    public login() {
        this.authService.setAuth({...this.auth});
        if(this.authService.verifyAuth()) {
            this.authService.login().subscribe( user => {
                if(user.Code == '200') {
                    this._verifyLogin = false;
                    this.authService.setHttpOptions();
                    this.router.navigate(['./fish-farm']);
                }
                else {
                    this._verifyLogin = true;
                }
            })
        }
        else {
            this._verifyLogin = true;
        }
        
    }
}
