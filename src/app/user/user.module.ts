import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule }     from '@angular/core';

import { EmailForPasswordChangeSentComponent } from './pages/email-for-password-change-sent/email-for-password-change-sent.component';
import { LoginComponent }                      from './pages/login/login.component';
import { ResetPasswordComponent }              from './pages/reset-password/reset-password.component';
import { RestorePasswordComponent }            from './pages/restore-password/restore-password.component';
import { SuccessfulPasswordResetComponent }    from './pages/successful-password-reset/successful-password-reset.component';
import { SignUpComponent }                     from './pages/sign-up/sign-up.component';
import { UserPageComponent }                   from './pages/user-page/user-page.component';

import { HeaderComponent }            from './components/header/header.component';
import { LoginFormComponent }         from './components/login-form/login-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { RestorePasswordFormComponent } from './components/restore-password-form/restore-password-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        EmailForPasswordChangeSentComponent,
        HeaderComponent,
        LoginComponent,
        LoginFormComponent,
        ResetPasswordComponent,
        ResetPasswordFormComponent,
        RestorePasswordComponent,
        SignUpComponent,
        SignUpFormComponent,
        SuccessfulPasswordResetComponent,
        UserPageComponent,
        RestorePasswordFormComponent,
    ],
    exports: [],
    imports: [
        UserRoutingModule,
        CommonModule,
        FormsModule
    ]
})

export class UserModule { }
