import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { StudentAssistantModule } from './student-assistant/student-assistant.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Angular2FontawesomeModule,
        StudentAssistantModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
