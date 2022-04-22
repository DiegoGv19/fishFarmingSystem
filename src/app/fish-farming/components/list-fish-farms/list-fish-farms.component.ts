import { Component, Input } from '@angular/core';
import { fishFarmAbbreviated } from '../../interfaces/fishFarmAbbreviated.interface';

@Component({
  selector: 'app-list-fish-farms',
  templateUrl: './list-fish-farms.component.html',
  styleUrls: ['./list-fish-farms.component.scss']
})
export class ListFishFarmsComponent {
    @Input() listFishFarmAbbreviated: Array<fishFarmAbbreviated> = [];
}
