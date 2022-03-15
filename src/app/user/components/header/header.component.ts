import { Component, Input } from '@angular/core';
import { HeaderData } from './interfaces/headerData.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  
    @Input() headerData: HeaderData = {
       image: '',
       title: '',
       paragraph: '',
    }
}
