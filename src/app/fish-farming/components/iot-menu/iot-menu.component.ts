import { Component } from '@angular/core';

@Component({
  selector: 'app-iot-menu',
  templateUrl: './iot-menu.component.html',
  styleUrls: ['./iot-menu.component.scss']
})
export class IotMenuComponent {
  public toggleIotMenuNav: boolean = true;

  public onChangeToggleNavBar(): void {
      this.toggleIotMenuNav = !this.toggleIotMenuNav;
  }
}
