import { Component, OnInit } from '@angular/core';
import { SubMenu } from '../../../main/components/sub-header/interfaces/subMenu.iterface';

import { FishFarmService } from '../../services/fish-farm.service';

import { findFishFarm } from '../../interfaces/findFishFarm.interface';
import { listFishFarm } from '../../interfaces/listFishFarm.interface';

@Component({
  selector: 'app-fish-farms-page',
  templateUrl: './fish-farms-page.component.html',
  styleUrls: ['./fish-farms-page.component.scss']
})
export class FishFarmsPageComponent implements OnInit {
    public listFishFarm: Array<listFishFarm> = [];
    public hideContainer: boolean = true;
    public subMenus: Array<SubMenu> = [
        {
            name: 'Agregar una piscigranja',
            url: 'fish-farm/add-fish-farm',
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>'
        },
        {
            name: 'Configuración general',
            url: 'fish-farm/general-configuration',
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>'
      }
    ]

    public constructor(private fishFarmService: FishFarmService){}

    ngOnInit(): void {
        this.findListFishFarms();
    }

    public findListFishFarms(): void {
        this.fishFarmService.findFishFarms().subscribe(
            (findFishFarm: findFishFarm) => {
                if( findFishFarm.Code == '200') {
                    this.listFishFarm = findFishFarm.FishFarms;
                }
            }
        )
    }
}
