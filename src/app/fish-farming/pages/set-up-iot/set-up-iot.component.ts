import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { fishFarmConfig } from '../../interfaces/fishFarmConfig.interfacce';
import { FishFarmService } from '../../services/fish-farm.service';
import { parameters } from '../../interfaces/parameters.interface';
import { response } from '../../interfaces/response.interface';

@Component({
  selector: 'app-set-up-iot',
  templateUrl: './set-up-iot.component.html',
  styleUrls: ['./set-up-iot.component.scss']
})
export class SetUpIotComponent implements OnInit {
    public subscriber: Subscription = new Subscription();
    public alertParams: boolean = false;
    public errorTemp: boolean = false;
    public errorTempRange: boolean = false;
    public errorPh: boolean = false;
    public errorPhRange: boolean = false;
    public errorDo: boolean = false;
    public errorDoRange: boolean = false;
    public error: boolean = false;
    public parameters: parameters = {
        FishFarmId: '',
        MinTemp: 0,
        MaxTemp: 0,
        MinPh: 0,
        MaxPh: 0,
        MinDo: 0,
        MaxDo: 0,
    }
    public subMenus: Array<SubMenu> = [
      {
          name: 'Volver',
          url: ['fish-farm'],
          image: '',
          template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
      }
    ]

    public constructor(private fishFarmService: FishFarmService, private router: Router) {}

    public ngOnInit() {
        if(this.fishFarmService.fishFarmId == '') {
            this.router.navigate(['./fish-farm/add-fish-farm']);
        }
        else {
            this.viewFishFarm();
            this.subscriber = this.fishFarmService.subjectListIot.subscribe(
              () => {
                  this.viewFishFarm();
              }
            )
        }
    }

    public get fishFarmConfig(): fishFarmConfig {
        return this.fishFarmService.fishFarmConfig;
    }

    public viewFishFarm(): void {
        this.fishFarmService.setDevice();
        this.fishFarmService.viewFishFarmConfig().subscribe(
            (fishFarm: fishFarmConfig) => {
                if( fishFarm.Code == '200') {
                    this.fishFarmService.setFishFarmConfig(fishFarm);
                    this.fishFarmService.getDevicesConfig();
                }
            }
        )
    }

    public get listTemperature() {
        return this.fishFarmService.listTemperature;
    }
    
    public get listPh() {
        return this.fishFarmService.listPh;
    }

    public get listDo() {
        return this.fishFarmService.listDo;
    }
    
    public get listCompuertas() {
        return this.fishFarmService.listCompuertas;
    }

    public validateParams(): boolean {
        if(typeof(this.fishFarmConfig.MinTemp) != 'number'  || typeof(this.fishFarmConfig.MaxTemp) != 'number') {
            this.errorTemp = true;
        }
        if(typeof(this.fishFarmConfig.MinPh) != 'number' || typeof(this.fishFarmConfig.MaxPh) != 'number') {
            this.errorPh = true;
        }
        if(typeof(this.fishFarmConfig.MinDo) != 'number' || typeof(this.fishFarmConfig.MaxDo) != 'number') {
            this.errorDo = true;
        }
        if(typeof(this.fishFarmConfig.MinTemp) != 'number' || typeof(this.fishFarmConfig.MaxTemp) != 'number' || typeof(this.fishFarmConfig.MinPh) != 'number' || typeof(this.fishFarmConfig.MaxPh) != 'number' || typeof(this.fishFarmConfig.MinDo) != 'number' || typeof(this.fishFarmConfig.MaxDo) != 'number') {
            this.error = true;
        }
        else {
            this.error = false;
        }
        return this.error;
    }

    public validateRangePams(): boolean {
        this.errorTemp = false;
        this.errorPh = false;
        this.errorDo = false;
        if(this.fishFarmConfig.MinTemp >= this.fishFarmConfig.MaxTemp) {
            this.errorTempRange = true;
        }
        if(this.fishFarmConfig.MinPh >= this.fishFarmConfig.MaxPh) {
            this.errorPhRange = true;
        }
        if(this.fishFarmConfig.MinDo >= this.fishFarmConfig.MaxDo) {
            this.errorDoRange = true;
        }
        if(this.fishFarmConfig.MinTemp >= this.fishFarmConfig.MaxTemp || this.fishFarmConfig.MinPh >= this.fishFarmConfig.MaxPh || this.fishFarmConfig.MinDo >= this.fishFarmConfig.MaxDo) {
            this.error = true;
        }
        else {
            this.error = false;
        }

        return this.error;
    }

    public getParameters(): void {
        this.parameters.FishFarmId = this.fishFarmService.fishFarmId;
        this.parameters.MaxTemp = this.fishFarmConfig.MaxTemp;
        this.parameters.MinTemp = this.fishFarmConfig.MinTemp;
        this.parameters.MaxPh = this.fishFarmConfig.MaxPh;
        this.parameters.MinPh = this.fishFarmConfig.MinPh;
        this.parameters.MaxDo = this.fishFarmConfig.MaxDo;
        this.parameters.MinDo = this.fishFarmConfig.MinDo;
    }

    public editParams():void {
        if(!this.validateParams()) {
            if(!this.validateRangePams()) {
                this.getParameters();
                this.alertParams = true;
            }
        }
    }

    public confirmationContinue(confirmation: boolean): void {
        this.alertParams = confirmation;
        this.fishFarmService.editParameters(this.parameters).subscribe(
            (response: response) => {
                if(response.Code == '200') {
                    this.router.navigate(['fish-farm']);
                }
            }
        )
    }
}
