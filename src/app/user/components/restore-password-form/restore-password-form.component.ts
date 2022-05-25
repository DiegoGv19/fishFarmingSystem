import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { recoverPassword } from '../../Interfaces/recoverPassword.interface';
import { response } from '../../../fish-farming/interfaces/response.interface';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-restore-password-form',
  templateUrl: './restore-password-form.component.html',
  styleUrls: ['./restore-password-form.component.scss']
})
export class RestorePasswordFormComponent implements OnInit {
    public passwordError: boolean = false;
    public passwordConfirmationError: boolean = false;
    public passwordNoSameError: boolean = false;
    public tokenInvalid: boolean = false;
    public constructor(private authService: AuthService, private router: Router) {}
    public recoverPassword: recoverPassword = {
        Password: '',
        PasswordConfirmation: '',
        Token: '',
    }
    public recoverPasswordSent: recoverPassword = {
      Password: '',
      PasswordConfirmation: '',
      Token: '',
    } 
    public ngOnInit() {
    }

    public passwordRestore(): void {
        if(this.recoverPassword.Password != '') {
            this.passwordError = false;
            if(this.recoverPassword.PasswordConfirmation != '') {
                this.passwordConfirmationError = false;
                if(this.recoverPassword.Password == this.recoverPassword.PasswordConfirmation) {
                    this.passwordNoSameError = false;
                    this.recoverPasswordSent.Token = this.authService.tokenPassword;
                    this.recoverPasswordSent.Password = shajs('sha256').update(this.recoverPassword.Password).digest('hex');
                    this.recoverPasswordSent.PasswordConfirmation = shajs('sha256').update(this.recoverPassword.PasswordConfirmation).digest('hex');
                    this.authService.recoverPassword(this.recoverPasswordSent).subscribe(
                        (response: response) => {
                            if(response.Code == '200') {
                                this.router.navigate(['user/email-for-password-change-sent']);
                            }
                        },
                        error => {
                            if(error.error.Type == 'token_invalid') {
                                this.tokenInvalid = true;
                            }
                        }
                    )
                }
                else {
                  this.passwordNoSameError = true;
                }
            }
            else {
              this.passwordConfirmationError = true;
            }
        }
        else {
          this.passwordError = true;
        }
    }
}
