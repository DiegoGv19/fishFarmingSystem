import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationMessageComponent } from './components/confirmation-message/confirmation-message.component';
import { MainHeaderComponent }          from './components/main-header/main-header.component';
import { MainNavBarComponent }          from './components/main-nav-bar/main-nav-bar.component';
import { SubHeaderComponent }           from './components/sub-header/sub-header.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';


@NgModule({
    declarations: [
        ConfirmationMessageComponent,
        MainHeaderComponent,
        MainNavBarComponent,
        SubHeaderComponent,
        ErrorPageComponent
    ],
    exports: [
        ConfirmationMessageComponent,
        MainHeaderComponent,
        SubHeaderComponent
    ],
    imports: [
        CommonModule
    ]
})

export class MainModule { }
