import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FishFarmService } from '../../services/fish-farm.service';

import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { fishFarm } from '../../interfaces/fishFarm.interface';
import { response } from '../../interfaces/response.interface';

@Component({
  selector: 'app-view-fish-farm',
  templateUrl: './view-fish-farm.component.html',
  styleUrls: ['./view-fish-farm.component.scss']
})
export class ViewFishFarmComponent implements OnInit, OnDestroy {
    private sub    : any;
    public deleteFishFamr: boolean = false;
    public deleteSuccessful: boolean = false;
    public fishFarmName: string = '';
    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: ['fish-farm'],
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
            this.fishFarmService.setFishFarmId(params['id']);
            this.fishFarmService.viewFishFarm().subscribe(
                (fishFarm: fishFarm) => {
                    this.fishFarmService.setFishFarm(fishFarm);
                    this.fishFarmName = this.fishFarmService.fishFarm.Name;
                    if( fishFarm.Code != '200') {
                        this.router.navigate(['fish-farm']);
                    }
                    this.fishFarmService.setDevice();
                    this.fishFarmService.getDevices();
                }
            )
        });

        
      }
    
    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public redirectTo(uri:string){
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([uri]));
    }

    public deleteFishFarm($event: any) {
        if($event == true) {
            this.deleteFishFamr = $event;
        }
    }

    public confirmationContinue($event: any) {
        this.deleteFishFamr = $event;
        if(this.deleteFishFamr == true) {
            this.fishFarmService.deleteFishFarm().subscribe(
                (response: response) => {
                    if (response.Code == '200') {
                        this.deleteFishFamr = false; 
                        this.deleteSuccessful = true;
                    }
                }
            )
        }
    }

    public confirmationDelete($event: any) {
        this.deleteSuccessful = $event;
        this.redirectTo('fish-farm');
    }
}
