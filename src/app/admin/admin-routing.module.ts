import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFishPageComponent } from './pages/admin-fish-page/admin-fish-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { CreateFishComponent } from './pages/create-fish/create-fish.component';
import { CreateOrganizationPageComponent } from './pages/create-organization/create-organization.component';


const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
        {
          path: 'fish',
          component: AdminFishPageComponent,
          children: [
            {
                path: 'create',
                component: CreateFishComponent
            }
        ]
        },
        {
          path: 'user',
          component: AdminUserPageComponent,
          children: [
              {
                  path: 'create',
                  component: CreateOrganizationPageComponent
              }
          ]
        }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
