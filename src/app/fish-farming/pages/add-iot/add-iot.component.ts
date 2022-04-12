import { Component, OnInit } from '@angular/core';
import { expand } from 'src/app/animations/app.animation';

@Component({
  selector: 'app-add-iot',
  templateUrl: './add-iot.component.html',
  styleUrls: ['./add-iot.component.scss'],
  animations: [expand()],
})
export class AddIotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
