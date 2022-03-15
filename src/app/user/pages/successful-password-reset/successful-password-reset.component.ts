import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
  selector: 'app-successful-password-reset',
  templateUrl: './successful-password-reset.component.html',
  styleUrls: ['./successful-password-reset.component.scss']
})
export class SuccessfulPasswordResetComponent {

    headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Contraseña restablecida',
        paragraph: ''
    }

}
