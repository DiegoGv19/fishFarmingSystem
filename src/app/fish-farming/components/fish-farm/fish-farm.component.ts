import { Component, Input } from '@angular/core';
import { listFishFarm } from '../../interfaces/listFishFarm.interface';

@Component({
  selector: 'app-fish-farm',
  templateUrl: './fish-farm.component.html',
  styleUrls: ['./fish-farm.component.scss']
})
export class FishFarmComponent {
  @Input() fishFarm: listFishFarm | undefined;

}
