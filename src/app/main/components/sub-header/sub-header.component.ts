import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SubMenu } from './interfaces/subMenu.iterface';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
    constructor(private sanitizer: DomSanitizer) {}

    @Input() subMenus: Array<SubMenu> = [];
    @Input() hideContainer: boolean = true;

    ngOnInit(): void {
        for (let subMenu of this.subMenus) {
            subMenu.image = this.sanitizer.bypassSecurityTrustHtml(subMenu.template)
        }
    }

    onChangeHideContainer(): void {
        this.hideContainer = !this.hideContainer;
        console.log(this.hideContainer);
    }
}
