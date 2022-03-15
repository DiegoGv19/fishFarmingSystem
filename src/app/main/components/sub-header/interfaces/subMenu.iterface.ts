import { SafeHtml } from "@angular/platform-browser";

export interface SubMenu {
    name: string;
    url: string;
    image: SafeHtml;
    template: string;
}