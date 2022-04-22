import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationMessageComponent } from './components/confirmation-message/confirmation-message.component';
import { MainHeaderComponent }          from './components/main-header/main-header.component';
import { MainNavBarComponent }          from './components/main-nav-bar/main-nav-bar.component';
import { SubHeaderComponent }           from './components/sub-header/sub-header.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ConfirmationDeleteMessageComponent } from './components/confirmation-delete-message/confirmation-delete-message.component';


@NgModule({
    declarations: [
        ConfirmationMessageComponent,
        ConfirmationDeleteMessageComponent,
        MainHeaderComponent,
        MainNavBarComponent,
        SubHeaderComponent,
        ErrorPageComponent
    ],
    exports: [
        ConfirmationMessageComponent,
        ConfirmationDeleteMessageComponent,
        MainHeaderComponent,
        SubHeaderComponent
    ],
    imports: [
        CommonModule
    ]
})

export class MainModule { }
