import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { requestPasswordRecovey } from '../../Interfaces/requestPasswordRecovey.interface';
import { AuthService } from '../../services/auth.service';
import { response } from '../../../fish-farming/interfaces/response.interface';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {
    public emailError: boolean = false;
    public requestPasswordRecovey: requestPasswordRecovey = {
        Email: ''
    }
    
    public constructor( private router: Router, private authService: AuthService ) {}

    public passwordRecovey(): void {
        if(this.requestPasswordRecovey.Email == '') {
            this.emailError = true;
        }
        else {
          this.emailError = false;
          this.authService.requestPasswordRecovery(this.requestPasswordRecovey).subscribe(
              (response: response) => {
                  if(response.Code == '200') {
                    this.router.navigate(['user/email-for-password-change-sent']);
                  }
              }
          )
        }
    }
}
