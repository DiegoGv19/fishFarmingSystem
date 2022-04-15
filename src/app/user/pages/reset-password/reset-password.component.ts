import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
    selector:    'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls:   ['./reset-password.component.scss']
})

export class ResetPasswordComponent {
    headerData: HeaderData = {
        image: 'https://igoumicdn.com/uploads/portfolio/Fish-Farm-Logo.jpg',
        title: 'Restablecer contraseña',
        paragraph: 'Ingresa tu correo electrónico para enviarte un enlace con el que puedas restablecer tu contraseña'
    }
}
