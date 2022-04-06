import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { ActivatedRoute, Router } from '@angular/router';
import { fishFarm } from '../../interfaces/fishFarm.interface';
import { Device } from '../../interfaces/device.interface';
import { FishFarmService } from '../../services/fish-farm.service';
@Component({
  selector: 'app-edit-iot',
  templateUrl: './edit-iot.component.html',
  styleUrls: ['./edit-iot.component.scss']
})
export class EditIotComponent implements OnInit,OnDestroy {
    private sub    : any;
    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: 'fish-farm/',
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
        }
    ]
    constructor(private fishFarmService: FishFarmService,private router: Router,private activateRoute: ActivatedRoute) {
       this.fishFarmService.resetIot();

    }

    public ngOnInit() {
        //const id: any = this.route.snapshot.paramMap.get('id')
        this.sub = this.activateRoute.params.subscribe( params => {
            this.fishFarmService.setIotId(params['id']);
            this.fishFarmService.viewIot().subscribe(
                (device:Device) =>{
                    this.fishFarmService.setIot(device);
                    console.log(this.fishFarmService.getIot())
                    if( device.Code != '200') {
                        console.log('Esto esta mal')
                        this.router.navigate(['fish-farm']);
                    }
                    //if( device.)
                }
            )
        })
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
