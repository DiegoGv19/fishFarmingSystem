import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './user/guards/auth.guard';

const routes: Routes = [

    {
        path: 'fish-farm',
        loadChildren: () => import('./fish-farming/fish-farming.module').then( m => m.FishFarmingModule ),
        //canLoad: [ AuthGuard ],
        //canActivate: [ AuthGuard ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then( m => m.UserModule ),
    },
    {
        path: '**',
        redirectTo: 'user/login'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
