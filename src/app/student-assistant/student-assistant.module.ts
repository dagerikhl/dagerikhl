import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { studentAssistantRoutes } from './student-assistant.routes';

import { StudentAssistantComponent } from './student-assistant.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [
        StudentAssistantComponent,
        CourseComponent
    ],
    imports: [ RouterModule.forChild(studentAssistantRoutes) ],
    exports: [ RouterModule ]
})
export class StudentAssistantModule { }
