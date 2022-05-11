import { Component, Input } from '@angular/core';
import { history } from '../../interfaces/history.interface';

@Component({
  selector: 'app-list-shoddy',
  templateUrl: './list-shoddy.component.html',
  styleUrls: ['./list-shoddy.component.scss']
})
export class ListShoddyComponent {
    @Input() histories: Array<history> = [];
}
