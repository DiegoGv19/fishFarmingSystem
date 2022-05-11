import { Component, Input, OnInit } from '@angular/core';
import { historyView } from '../../interfaces/historyView.interface';

@Component({
  selector: 'app-list-shoddy-information',
  templateUrl: './list-shoddy-information.component.html',
  styleUrls: ['./list-shoddy-information.component.scss']
})
export class ListShoddyInformationComponent implements OnInit {
    @Input() historyView: historyView = {
        EventDate: '',
        EventTime: '',
        Temperature: '',
        Ph: '',
        Do: '',
        Code: '',
    }
    constructor() { }

    ngOnInit(): void {}

}
