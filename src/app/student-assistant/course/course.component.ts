import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

    private coursecode: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .map(params => params['coursecode'])
            .subscribe((coursecode: string) => {
                if (coursecode != undefined) {
                    this.coursecode = coursecode;
                }
            });
    }

}
