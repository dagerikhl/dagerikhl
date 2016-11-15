/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentAssistantComponent } from './student-assistant.component';

describe('StudentAssistantComponent', () => {
    let component: StudentAssistantComponent;
    let fixture: ComponentFixture<StudentAssistantComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ StudentAssistantComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StudentAssistantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
