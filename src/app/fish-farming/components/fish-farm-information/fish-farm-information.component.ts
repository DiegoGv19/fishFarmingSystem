import { Component } from '@angular/core';

import { FishFarmService } from '../../services/fish-farm.service';

import { fishFarm } from '../../interfaces/fishFarm.interface';

@Component({
  selector: 'app-fish-farm-information',
  templateUrl: './fish-farm-information.component.html',
  styleUrls: ['./fish-farm-information.component.scss']
})
export class FishFarmInformationComponent {

    constructor(private fishFarmService: FishFarmService) {
    }

    public get fishFarm(): fishFarm {
      return this.fishFarmService.fishFarm;
    }
}
