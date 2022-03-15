import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
    public toggleNavBar: boolean = true;

    public onChangeToggleNavBar(): void {
        this.toggleNavBar = !this.toggleNavBar;
    }
}
