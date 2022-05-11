import { Component, Input, OnInit } from '@angular/core';
import { history } from '../../interfaces/history.interface';

@Component({
  selector: 'app-shoddy',
  templateUrl: './shoddy.component.html',
  styleUrls: ['./shoddy.component.scss']
})
export class ShoddyComponent implements OnInit {
    @Input() history: history = {
        Id: '',
        EventDateTime: '',
        TypeDevice: '',
    }

  constructor() { }

  ngOnInit(): void {
  }

}
