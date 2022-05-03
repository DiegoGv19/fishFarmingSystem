import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { fishFarmCreate } from '../../interfaces/fishFarmCreate.interface';
import { fishFarmCreateResponse } from '../../interfaces/fishFarmCreateResponse.interface';
import { response } from '../../interfaces/response.interface';
import { typeFish } from '../../interfaces/typeFish.interface';
import { typeFishes } from '../../interfaces/typeFishes.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-edit-fish-farm',
  templateUrl: './edit-fish-farm.component.html',
  styleUrls: ['./edit-fish-farm.component.scss']
})
export class EditFishFarmComponent implements OnInit {
    private sub: any;
    public alertAddFishFarm: boolean = false;
    public saveWithoutConfiguration: boolean = false;
    public errorName: boolean = false;
    public disableAll: boolean = false;
    private _typeFishes: Array<typeFish> = [];
    private _fishFarm: fishFarmCreate = {
        Name       : '',
        Description: '',
        TypeFishId : '',
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

    public constructor(private fishFarmService: FishFarmService, private router: Router, private activateRoute: ActivatedRoute){}

    public ngOnInit() {
        this.findTypeFishes();
        this.findFishFarm();
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

    public findFishFarm() {
        this.sub = this.activateRoute.params.subscribe(params => {
            this.fishFarmService.setFishFarmId(params['id']);
            this.fishFarmService.viewFishFarmAbbreviated().subscribe(
                (fishFarm: fishFarmCreate) => {
                    if(fishFarm.Code == '200') {
                        this._fishFarm = fishFarm;
                    }
                }
            )
        });
    }

    public editFishFarm() {
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
        this.fishFarmService.editFishFarm(this._fishFarm).subscribe(
            (fishFarmCreateResponse: response) => {
                if(fishFarmCreateResponse.Code == '200') {
                    if(!this.saveWithoutConfiguration) {
                        this.disableAll = true;
                        this.router.navigate([`fish-farm/edit/${this.fishFarmService.fishFarmId}/set-up-iot`]);
                    }
                }
            }
        )
    }

}
