import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
    selector:    'app-login',
    templateUrl: './login.component.html',
    styleUrls:   ['./login.component.scss']

})

export class LoginComponent {
    
    headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Inicia Sesión',
        paragraph: 'Inicia sesión con tu usuario o correo electrónico y contraseña brindados por nosotros'
    }
}
