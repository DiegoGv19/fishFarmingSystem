import { HttpClientModule } from '@angular/common/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { UserModule }       from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        UserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
