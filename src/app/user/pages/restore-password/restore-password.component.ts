import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit, OnDestroy {
    private sub    : any;
    public headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Restablecer contraseña',
        paragraph: ''
    }

    public constructor(private authService: AuthService, private router: Router, private activateRoute: ActivatedRoute) {}

    public ngOnInit() {
        this.sub = this.activateRoute.params.subscribe(
            (params) => {
                this.authService.setTokenPassword(params['token']);
        })
    }
    
    public ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
}
