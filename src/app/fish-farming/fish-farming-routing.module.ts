import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFishFarmComponent } from './pages/add-fish-farm/add-fish-farm.component';
import { AddIotComponent } from './pages/add-iot/add-iot.component';
import { EditIotComponent } from './pages/edit-iot/edit-iot.component';
import { FishFarmsPageComponent } from './pages/fish-farms-page/fish-farms-page.component';
import { GeneralConfigurationComponent } from './pages/general-configuration/general-configuration.component';
import { SetUpIotComponent } from './pages/set-up-iot/set-up-iot.component';
import { ShoddyHistoryComponent } from './pages/shoddy-history/shoddy-history.component';
import { ViewFishFarmComponent } from './pages/view-fish-farm/view-fish-farm.component';
import { ViewShoddyComponent } from './pages/view-shoddy/view-shoddy.component';

const routes: Routes = [
{
    path: '',
    component: FishFarmsPageComponent,
    children: [
    {
        path: 'add-fish-farm',
        component: AddFishFarmComponent,
        children: [
        {
            path: 'set-up-iot',
            component: SetUpIotComponent,
            children: [
            {
                path: 'add-iot',
                component: AddIotComponent
            }
            ]
        }
        ]
    },
    {
        path: 'view/:id',
        component: ViewFishFarmComponent,
        children: [
        {
            path: 'shoddy-history',
            component: ShoddyHistoryComponent,
            children: [
            {
                path: 'shoddy/:id',
                component: ViewShoddyComponent,
            }
            ]
        },
        {
            path: 'iot/:id',
            component: EditIotComponent,
        },
        ]
    },
    {
        path: 'general-configuration',
        component: GeneralConfigurationComponent,
    }
    ]
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class FishFarmingRoutingModule { }
