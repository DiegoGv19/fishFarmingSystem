import { Component, Input } from '@angular/core';
import { listFishFarm } from '../../interfaces/listFishFarm.interface';

@Component({
  selector: 'app-list-fish-farms',
  templateUrl: './list-fish-farms.component.html',
  styleUrls: ['./list-fish-farms.component.scss']
})
export class ListFishFarmsComponent {
  @Input() listFishFarm: Array<listFishFarm> = [];
}
