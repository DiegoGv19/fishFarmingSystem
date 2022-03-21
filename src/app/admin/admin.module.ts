import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { RegisterAccountComponent } from './pages/register-account/register-account.component';



@NgModule({
    declarations: [
        RegisterAccountComponent,
    ],
    exports: [],
    imports: [
        AdminRoutingModule,
      CommonModule,
      FormsModule
    ]
})

export class AdminModule { }
