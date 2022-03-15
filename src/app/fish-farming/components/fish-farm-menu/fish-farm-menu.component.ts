import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fish-farm-menu',
  templateUrl: './fish-farm-menu.component.html',
  styleUrls: ['./fish-farm-menu.component.scss']
})
export class FishFarmMenuComponent {
  public toggleFishFarmMenuNav: boolean = true;

  public onChangeToggleNavBar(): void {
      this.toggleFishFarmMenuNav = !this.toggleFishFarmMenuNav;
  }
}
