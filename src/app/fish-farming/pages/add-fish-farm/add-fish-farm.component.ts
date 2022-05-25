import { Component, OnInit } from '@angular/core';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { FishFarmService } from '../../services/fish-farm.service';
import { Router } from '@angular/router';
import { typeFish } from '../../interfaces/typeFish.interface';
import { typeFishes } from '../../interfaces/typeFishes.interface';
import { fishFarmCreate } from '../../interfaces/fishFarmCreate.interface';
import { fishFarmCreateResponse } from '../../interfaces/fishFarmCreateResponse.interface';

@Component({
  selector: 'app-add-fish-farm',
  templateUrl: './add-fish-farm.component.html',
  styleUrls: ['./add-fish-farm.component.scss']
})
export class AddFishFarmComponent implements OnInit {
    public alertAddFishFarm: boolean = false;
    public saveWithoutConfiguration: boolean = false;
    public errorName: boolean = false;
    public disableAll: boolean = false;
    private _typeFishes: Array<typeFish> = [];
    private _fishFarm: fishFarmCreate = {
        Name       : '',
        Description: '',
        TypeFishId : 'null',
        Code       : '',
    }
    subMenus: Array<SubMenu> = [
    {
        name: 'Volver',
        url: ['fish-farm'],
        image: '',
        template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
    }
    ]

    public get typeFishes() {
        return this._typeFishes;
    }

    public get fishFarm() {
       return this._fishFarm;
    }

    public constructor(private fishFarmService: FishFarmService, private router: Router) {}

    public ngOnInit() {
        this.findTypeFishes();
    }

    public changeSaveWithoutConfiguration(change:boolean) {
        this.saveWithoutConfiguration = change;
    }

    public findTypeFishes() {
        this.fishFarmService.findTypeFishes().subscribe(
            (typeFishes: typeFishes) => {
                if(typeFishes.Code == '200') {
                    this._typeFishes = typeFishes.TypeFishes;
                }
            }
        )
    }

    public createFishFarm() {
        if(this._fishFarm.Name != '') {
            this.errorName = false;
            this.alertAddFishFarm = true
            this._fishFarm.TypeFishId = this._fishFarm.TypeFishId != 'null' ? this._fishFarm.TypeFishId : null;
        }
        else {
            this.errorName = true;
        }
    }

    public confirmationContinue(confirmation: boolean): void {
        this.alertAddFishFarm = confirmation;
        this.fishFarmService.createFishFarm(this._fishFarm).subscribe(
            (fishFarmCreateResponse: fishFarmCreateResponse) => {
                console.log(fishFarmCreateResponse);
                if(fishFarmCreateResponse.Code == '200') {
                    if(!this.saveWithoutConfiguration) {
                        this.fishFarmService.setFishFarmId(fishFarmCreateResponse.Id);
                        this.disableAll = true;
                        this.router.navigate(['fish-farm/add-fish-farm/set-up-iot']);
                    }
                    else {
                        this._fishFarm.Name = '';
                        this._fishFarm.Description = '';
                        this._fishFarm.TypeFishId = 'null';
                    }
                }
            }
        );
    }
}
