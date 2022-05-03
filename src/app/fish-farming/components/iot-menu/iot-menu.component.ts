import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FishFarmService } from '../../services/fish-farm.service';

@Component({
  selector: 'app-iot-menu',
  templateUrl: './iot-menu.component.html',
  styleUrls: ['./iot-menu.component.scss']
})
export class IotMenuComponent {
    @Output() deleteEvent: EventEmitter<boolean> = new EventEmitter();
    public toggleIotMenuNav: boolean = true;
    public constructor(private fishFarmService: FishFarmService, private router: Router){}

    public onChangeToggleNavBar(): void {
        this.toggleIotMenuNav = !this.toggleIotMenuNav;
    }

    public deleteIot(): void {
        this.deleteEvent.emit(true);
    }
}
