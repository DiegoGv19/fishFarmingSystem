import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterAccountComponent } from './pages/register-account/register-account.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterAccountComponent,   
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
