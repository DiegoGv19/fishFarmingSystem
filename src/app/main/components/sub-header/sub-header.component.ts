import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SubMenu } from './interfaces/subMenu.iterface';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {

    @Input() subMenus: Array<SubMenu> = [];
    @Input() hideContainer: boolean = true;

    constructor(private sanitizer: DomSanitizer, private router: Router ) {}

    public ngOnInit(): void {
        for (let subMenu of this.subMenus) {
            subMenu.image = this.sanitizer.bypassSecurityTrustHtml(subMenu.template)
        }
    }

    public onChangeHideContainer(url: string): void {
        this.hideContainer = !this.hideContainer;
        this.router.navigate([url]);
    }
}
