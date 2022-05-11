import { Component, Input, OnInit } from '@angular/core';
import { typeDevices } from '../../interfaces/typeDevices.interface';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-shoddy-filter',
  templateUrl: './shoddy-filter.component.html',
  styleUrls: ['./shoddy-filter.component.scss']
})
export class ShoddyFilterComponent {
    @Input() typeSensors: Array<typeDevices> = []
    public oldFilter: string = '';
    public filter: any = {
        Filter: '',
    }
    public constructor(private fishFarmService: FishFarmService) {}

    public selectFilter()
    {
        if(this.oldFilter != this.filter.Filter) {
            this.oldFilter = this.filter.Filter;
            this.fishFarmService.setHistoryFilterId( this.filter.Filter);
            this.fishFarmService.SetsubjectHistory();
        }
    }
}
