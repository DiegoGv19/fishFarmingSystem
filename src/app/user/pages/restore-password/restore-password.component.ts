import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent {

    headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Restablecer contraseña',
        paragraph: ''
    }
}
