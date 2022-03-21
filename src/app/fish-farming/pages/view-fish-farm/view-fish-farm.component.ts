import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FishFarmService } from '../../services/fish-farm.service';

import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { fishFarm } from '../../interfaces/fishFarm.interface';
import { Device } from '../../interfaces/device.interface';

@Component({
  selector: 'app-view-fish-farm',
  templateUrl: './view-fish-farm.component.html',
  styleUrls: ['./view-fish-farm.component.scss']
})
export class ViewFishFarmComponent implements OnInit, OnDestroy {
    private sub    : any;
    public id: string = '';

    
    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: 'fish-farm',
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
        }
    ]

    public constructor(private fishFarmService: FishFarmService, private router: Router, private activateRoute: ActivatedRoute) {
        this.fishFarmService.resetFishFarm();
        this.fishFarmService.setDevice();
    }

    public ngOnInit() {
        this.sub = this.activateRoute.params.subscribe(params => {
            this.id = params['id'];
            this.fishFarmService.viewFishFarm(this.id).subscribe(
                (fishFarm: fishFarm) => {
                    this.fishFarmService.setFishFarm(fishFarm);
                    if( fishFarm.Code != '200') {
                        this.router.navigate(['fish-farm']);
                    }
                    this.fishFarmService.setDevice();
                    this.fishFarmService.getDevices();
                }
            )
            console.log(this.id);
        });

        
      }
    
    public ngOnDestroy() {
        this.sub.unsubscribe();
    }
}