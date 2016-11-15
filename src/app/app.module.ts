import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { StudentAssistantModule } from './student-assistant/student-assistant.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StudentAssistantModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
