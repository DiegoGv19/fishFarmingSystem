import { Component, Input } from '@angular/core';
import { fishFarmAbbreviated } from '../../interfaces/fishFarmAbbreviated.interface';

@Component({
  selector: 'app-fish-farm',
  templateUrl: './fish-farm.component.html',
  styleUrls: ['./fish-farm.component.scss']
})
export class FishFarmComponent {
  @Input() fishFarmAbbreviated: fishFarmAbbreviated | undefined;

}
