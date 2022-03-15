import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Registrar una nueva empresa',
        paragraph: 'Ingresa los datos solicitados para crear tu empresa.'
    }

}
