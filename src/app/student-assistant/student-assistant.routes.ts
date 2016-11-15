import { Routes } from '@angular/router';

import { StudentAssistantComponent } from './student-assistant.component';
import { CourseComponent } from './course/course.component';

export const studentAssistantRoutes: Routes = [
    {
        path: 'student-assistant',
        component: StudentAssistantComponent,
        children: [
            {
                path: ':course',
                component: CourseComponent
            }
        ]
    }
];
