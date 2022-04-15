import { SafeHtml } from "@angular/platform-browser";

export interface SubMenu {
    name: string;
    url: Array<any>;
    image: SafeHtml;
    template: string;
}