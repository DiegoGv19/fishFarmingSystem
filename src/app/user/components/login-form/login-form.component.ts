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
    
    public auth: Auth = {
        Email: '',
        Password: ''
    }

    constructor( private router: Router, private authService: AuthService ) {}

    public login() {
        this.authService.setAuth({...this.auth});
        this.authService.login().subscribe( user => {
            if(user.Code == '200') {
                this.router.navigate(['./fish-farm'])
            }

            else {
              this.router.navigate(['./user/login'])
            }
        })
        
    }
}
