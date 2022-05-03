import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { FishFarmService } from '../../services/fish-farm.service';
import { device } from '../../interfaces/device.interface';
import { response } from '../../interfaces/response.interface';

@Component({
  selector: 'app-edit-iot',
  templateUrl: './edit-iot.component.html',
  styleUrls: ['./edit-iot.component.scss']
})
export class EditIotComponent {
    private sub    : any;
    public deleteIotQuestion: boolean = false;
    public deleteSuccessful: boolean = false;
    public device: device = {
        Name       :'',
        TypeDevice :'',
        ImageUrl   :'',
        Description:'',
        DeviceCode :'',
        IsConnected:'',
        Code       : ''
    }
    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: ['fish-farm/view/', this.fishFarmService.fishFarmId],
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
        }
    ]

    public constructor(private fishFarmService: FishFarmService, private router: Router, private activateRoute: ActivatedRoute) {}

    public ngOnInit() {
        this.sub = this.activateRoute.params.subscribe(params => {
            this.fishFarmService.setDeviceId(params['id']);
            this.fishFarmService.viewDevice().subscribe(
                (device: device) => {
                    if( device.Code != '200') {
                        this.router.navigate(['fish-farm/view', this.fishFarmService.fishFarmId]);
                    }
                   this.device = device
                }
            )
        });

        
      }
    
    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public deleteEvent($event: boolean) {
        this.deleteIotQuestion = $event;
    }

    public questionDelete($event: boolean) {
        this.deleteIotQuestion = false;
        if($event) {
            this.deleteSuccessful = true;
        }
    }

    public confirmationDelete($event: boolean ) {
        this.deleteSuccessful = false;
        if(!$event) {
            this.fishFarmService.deleteDevice().subscribe(
                (response: response) => {
                    console.log(response);
                    if(response.Code == '200') {
                        this.router.navigate(['fish-farm/view/', this.fishFarmService.fishFarmId]);
                    }
                }
            )
        }
    }
}
