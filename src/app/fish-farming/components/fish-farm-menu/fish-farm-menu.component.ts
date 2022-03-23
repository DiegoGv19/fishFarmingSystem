import { Component, Input } from '@angular/core';
import { FishFarmService } from '../../services/fish-farm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish-farm-menu',
  templateUrl: './fish-farm-menu.component.html',
  styleUrls: ['./fish-farm-menu.component.scss']
})
export class FishFarmMenuComponent {
    public toggleFishFarmMenuNav: boolean = true;

    public constructor(private fishFarmService: FishFarmService, private router: Router) {}

  public hideMenu(): void {
    this.onChangeToggleNavBar();
  }

    public onChangeToggleNavBar(): void {
        this.toggleFishFarmMenuNav = !this.toggleFishFarmMenuNav;
    }

}
