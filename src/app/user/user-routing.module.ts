import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailForPasswordChangeSentComponent } from './pages/email-for-password-change-sent/email-for-password-change-sent.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SuccessfulPasswordResetComponent } from './pages/successful-password-reset/successful-password-reset.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
{
    path: '',
    component: UserPageComponent,
    children: [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
    },
    {
        path: 'email-for-password-change-sent',
        component: EmailForPasswordChangeSentComponent,
    },
    {
        path: 'restore-password/:token',
        component: RestorePasswordComponent,
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    },
    {
        path: 'successful-password-reset',
        component: SuccessfulPasswordResetComponent,
    }
    ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
