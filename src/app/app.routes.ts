import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './student-assistant/course/course.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/student-assistant/tdt4110',
        pathMatch: 'full'
    }
];
