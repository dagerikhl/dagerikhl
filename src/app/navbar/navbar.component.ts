import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    private routes: [ { key: { key: string, value: string }, value: [ { key: string, value: string } ] } ];

    constructor() { }

    ngOnInit() {
        this.routes = [
            {
                key: {
                    key: 'student-assistant',
                    value: 'Student Assistant'
                },
                value: [
                    {
                        key: 'tdt4110',
                        value: 'TDT4110 (Python)'
                    },
                    {
                        key: 'tdt4100',
                        value: 'TDT4100 (Java)'
                    }
                ]
            },
            {
                key: {
                    key: 'other',
                    value: 'Other'
                },
                value: [
                    {
                        key: 'ph',
                        value: 'Placeholder (can you not)'
                    }
                ]
            }
        ]
    }

}
