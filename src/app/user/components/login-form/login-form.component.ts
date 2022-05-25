import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../Interfaces/auth.interface';
import { User } from '../../Interfaces/user.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

    private _blockedAccount: boolean = false;
    private _correctPassword: boolean = false;
    private _userExists: boolean = false;
    private _verifyEmail: boolean = false;
    private _verifyPassword: boolean = false;
    public auth: Auth = {
        Email: '',
        Password: ''
    }

    constructor( private router: Router, private authService: AuthService ) {}

    public get blockedAccount(): boolean {
        return this._blockedAccount;
    }

    public get correctPassword(): boolean {
        return this._correctPassword;
    }

    public get userExists(): boolean {
        return this._userExists;
    }

    public get verifyEmail(): boolean {
        return this._verifyEmail;
    }

    public get verifyPassword(): boolean {
        return this._verifyPassword;
    }

    public login(): void {
        this.authService.login().subscribe( 
            (user: User) => {
                this.validateLoginRequest(user);
           },

           error => {
              this.validateLoginRequest(error.error);
           }
        )
    }

    public resetValidate(): void {
        this._blockedAccount = false
        this._correctPassword = false;
        this._userExists = false;
    }

    public validateAuth(): void {
        if(this.auth.Email != '' && this.auth.Password != '') {
            this._verifyEmail = false;
            this._verifyPassword = false;
            this.authService.setAuth({...this.auth});
            this.login();
        }
        else {
            if(this.auth.Email == '') {
                this._verifyEmail = true;
            }
            if(this.auth.Password == '') {
                this._verifyPassword = true;
            }
        }
    }

    public validateLoginRequest(user: User): void {
        this.resetValidate();
        switch(user.Type) {
            case 'successfully':
                this.resetValidate();
                this.authService.setHttpOptions();
                if (user.Roles[0] == 'administrator') {
                    this.router.navigate(['./fish-farm']);
                }
                else {
                    this.router.navigate(['./fish-farm']);
                }
                break;
                
            case 'incorrect_password': 
                this._correctPassword = true;
                break;

            case 'user_not_found': 
                this._userExists = true;
                break;

            case 'locked_account': 
                this._blockedAccount = true;
                break;
        }
    }

}
