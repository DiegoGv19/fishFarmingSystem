import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { FishFarmingRoutingModule } from './fish-farming-routing.module';

import { AddFishFarmComponent }          from './pages/add-fish-farm/add-fish-farm.component';
import { AddIotComponent }               from './pages/add-iot/add-iot.component';
import { EditIotComponent }              from './pages/edit-iot/edit-iot.component';
import { GeneralConfigurationComponent } from './pages/general-configuration/general-configuration.component';
import { FishFarmsPageComponent }        from './pages/fish-farms-page/fish-farms-page.component';
import { ShoddyHistoryComponent }        from './pages/shoddy-history/shoddy-history.component';
import { SetUpIotComponent } from './pages/set-up-iot/set-up-iot.component';
import { ViewFishFarmComponent }         from './pages/view-fish-farm/view-fish-farm.component';
import { ViewShoddyComponent }           from './pages/view-shoddy/view-shoddy.component';

import { DeleteIotComponent }             from './components/delete-iot/delete-iot.component';
import { DeleteFishFarmComponent }        from './components/delete-fish-farm/delete-fish-farm.component';
import { FishFarmComponent }              from './components/fish-farm/fish-farm.component';
import { FishFarmInformationComponent }   from './components/fish-farm-information/fish-farm-information.component';
import { FishFarmIotComponent }           from './components/fish-farm-iot/fish-farm-iot.component';
import { FishFarmMenuComponent }          from './components/fish-farm-menu/fish-farm-menu.component';
import { IotDeviceComponent }             from './components/iot-device/iot-device.component';
import { IotFormComponent }               from './components/iot-form/iot-form.component';
import { IotMenuComponent }               from './components/iot-menu/iot-menu.component';
import { ListFishFarmsComponent }         from './components/list-fish-farms/list-fish-farms.component';
import { ListShoddyComponent }            from './components/list-shoddy/list-shoddy.component';
import { ListShoddyInformationComponent } from './components/list-shoddy-information/list-shoddy-information.component';
import { ShoddyFilterComponent }          from './components/shoddy-filter/shoddy-filter.component';
import { ShoddyInformationComponent }     from './components/shoddy-information/shoddy-information.component';
import { ShoddyComponent }                from './components/shoddy/shoddy.component';

import { MainModule } from '../main/main.module';
import { FormsModule } from '@angular/forms';
import { IotRangeComponent } from './components/iot-range/iot-range.component';
import { IotAddComponent } from './components/iot-add/iot-add.component';
import { EditFishFarmComponent } from './pages/edit-fish-farm/edit-fish-farm.component';

@NgModule({
    declarations: [
        AddFishFarmComponent,
        AddIotComponent,
        DeleteFishFarmComponent,
        DeleteIotComponent,
        EditIotComponent,
        FishFarmComponent,
        FishFarmInformationComponent,
        FishFarmIotComponent,
        FishFarmMenuComponent,
        FishFarmsPageComponent,
        GeneralConfigurationComponent,
        IotAddComponent,
        IotDeviceComponent,
        IotFormComponent,
        IotMenuComponent,        
        ListFishFarmsComponent,
        ListShoddyComponent,
        ListShoddyInformationComponent,
        SetUpIotComponent,
        ShoddyComponent,
        ShoddyFilterComponent,
        ShoddyInformationComponent,
        ShoddyHistoryComponent,
        ViewFishFarmComponent,
        ViewShoddyComponent,
        IotRangeComponent,
        EditFishFarmComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        FishFarmingRoutingModule,
        FormsModule,
        MainModule
    ]
})

export class FishFarmingModule { }
