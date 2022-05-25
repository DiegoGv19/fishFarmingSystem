import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
  selector: 'app-email-for-password-change-sent',
  templateUrl: './email-for-password-change-sent.component.html',
  styleUrls: ['./email-for-password-change-sent.component.scss']
})
export class EmailForPasswordChangeSentComponent {

    headerData: HeaderData = {
        image: 'https://igoumicdn.com/uploads/portfolio/Fish-Farm-Logo.jpg',
        title: 'Correo electrónico enviado',
        paragraph: 'Acabamos de enviar un correo electrónico con un enlace para que puedas restablecer tu contraseña'
    }
    public constructor( private router: Router ) {}

    public redirectToLogin(): void {
        this.router.navigate(['./user/login'])
    }
}
