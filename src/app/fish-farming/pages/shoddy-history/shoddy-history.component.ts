import { Component } from '@angular/core';
import { SubMenu } from 'src/app/main/components/sub-header/interfaces/subMenu.iterface';
import { histories } from '../../interfaces/histories.interface';
import { history } from '../../interfaces/history.interface';
import { FishFarmService } from '../../services/fish-farm.service';
import { typeDevices } from '../../interfaces/typeDevices.interface';
import { typeDevicesResponse } from '../../interfaces/typeDevicesResponse.interface';
import { typeSensorsResponse } from '../../interfaces/typeSensorsResponse.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoddy-history',
  templateUrl: './shoddy-history.component.html',
  styleUrls: ['./shoddy-history.component.scss']
})
export class ShoddyHistoryComponent {
    public histories: Array<history> = [];
    public typeSensors: Array<typeDevices> = [];
    public subscriber: Subscription = new Subscription();
    public subMenus: Array<SubMenu> = [
        {
            name: 'Volver',
            url: ['fish-farm/view', this.fishFarmService.fishFarmId],
            image: '',
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>'
        }
    ];

    public constructor(private fishFarmService: FishFarmService) {}

    public ngOnInit() {
        this.findTypeDevice();
        this.findHistory();
        this.subscriber = this.fishFarmService.subjectHistory.subscribe(
            () => {
                this.findHistory();
            }
        )
    }

    public findHistory(): void {
        this.fishFarmService.findHistoryList().subscribe(
            (histories: histories) => {
                if(histories.Code == '200') {
                    this.histories = histories.Histories;
                }
            }
        );
    }

    public findTypeDevice(): void {
        this.fishFarmService.findTypeSensors().subscribe(
            (typeDevices: typeSensorsResponse) => {
                if(typeDevices.Code == '200') {
                    this.typeSensors = typeDevices.TypeSensor;
                }
            }
        )
    }
}
