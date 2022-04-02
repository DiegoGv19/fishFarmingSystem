import { HttpClientModule } from '@angular/common/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { UserModule }       from './user/user.module';
import { ToastrModule } from 'ngx-toastr';
import { reduce } from 'rxjs';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        UserModule,
        ToastrModule.forRoot( {
            
            closeButton: true,
            progressBar: true,
            timeOut: 8000,})
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
