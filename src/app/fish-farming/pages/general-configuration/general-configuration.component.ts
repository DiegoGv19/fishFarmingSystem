import { Component, OnInit } from '@angular/core';
import { SubMenu } from '../../../main/components/sub-header/interfaces/subMenu.iterface';
import { generalConfiguration } from '../../interfaces/generalConfiguration.interface';
import { response } from '../../interfaces/response.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-general-configuration',
  templateUrl: './general-configuration.component.html',
  styleUrls: ['./general-configuration.component.scss']
})
export class GeneralConfigurationComponent implements OnInit {

    public alertUpdateGeneralConfiguration: boolean = false;
    private _generalConfiguration: generalConfiguration = {
        WayToOpenGates : '',
        TimeToOpenGates: 0,
        Code           : '',
    }

    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: 'fish-farm/',
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
        }
    ]

    public constructor(private fishFarmService: FishFarmService){}

    ngOnInit(): void {
        this.findGeneralConfiguration();
    }

    public get generalConfiguration(): generalConfiguration {
        return this._generalConfiguration;
    }

    public findGeneralConfiguration(): void {
        this.fishFarmService.findFishFarmConfiguration().subscribe(
            (generalConfiguration: generalConfiguration) => {
                if(generalConfiguration.Code == '200') {
                    this._generalConfiguration = generalConfiguration;
                    this.fishFarmService.setGeneralConfiguration(generalConfiguration);
                }
            }
        )
    }
    
    public updateGeneralConfiguration(): void {
        this.fishFarmService.setGeneralConfiguration(this._generalConfiguration);
        this.fishFarmService.updateFishFarmConfiguration().subscribe(
            (response: response) => {
                if(response.Code == '200') {
                    this.alertUpdateGeneralConfiguration = true;
                }
            }
        )
    }

    public confirmationContinue(confirmation: boolean): void {
        this.alertUpdateGeneralConfiguration = confirmation
    }
}
