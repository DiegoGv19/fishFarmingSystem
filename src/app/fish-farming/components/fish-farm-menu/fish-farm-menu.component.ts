import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FishFarmService } from '../../services/fish-farm.service';
import { Router } from '@angular/router';
import { response } from '../../interfaces/response.interface';

@Component({
  selector: 'app-fish-farm-menu',
  templateUrl: './fish-farm-menu.component.html',
  styleUrls: ['./fish-farm-menu.component.scss']
})
export class FishFarmMenuComponent {
    public toggleFishFarmMenuNav: boolean = true;
    public fishFarmId: string = '';
    @Output() deleteEvent: EventEmitter<boolean> = new EventEmitter();

    public constructor(private fishFarmService: FishFarmService) {
        
    }
    public ngOnInit() {
        this.fishFarmId = this.fishFarmService.fishFarmId;
    }
    public hideMenu(): void {
        this.onChangeToggleNavBar();
    }

    public onChangeToggleNavBar(): void {
        this.toggleFishFarmMenuNav = !this.toggleFishFarmMenuNav;
    }
    
    public deleteFishFarm(confirmation: boolean) {
        this.deleteEvent.emit(confirmation)
    }
}
