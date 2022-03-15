import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
  selector: 'app-email-for-password-change-sent',
  templateUrl: './email-for-password-change-sent.component.html',
  styleUrls: ['./email-for-password-change-sent.component.scss']
})
export class EmailForPasswordChangeSentComponent {

    headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Correo electrónico enviado',
        paragraph: 'Acabamos de enviar un correo electrónico con un enlace para que puedas restablecer tu contraseña'
    }
}
