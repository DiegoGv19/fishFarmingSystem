import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminFishPageComponent } from './pages/admin-fish-page/admin-fish-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { MainModule } from '../main/main.module';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListFishComponent } from './components/list-fish/list-fish.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { CreateOrganizationPageComponent } from './pages/create-organization/create-organization.component';
import { CreateFishComponent } from './pages/create-fish/create-fish.component';



@NgModule({
    declarations: [
        AdminPageComponent,
        AdminFishPageComponent,
        AdminUserPageComponent,
        ListUserComponent,
        ListFishComponent,
        CreateOrganizationPageComponent,
        CreateFishComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        MainModule
    ]
})

export class AdminModule { }
