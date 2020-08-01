import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-qualification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QualificationComponent implements OnInit {

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change qualification status.?';
    public cancelClicked: boolean = false;

    checklistItems = [
        {"criteria":'Has 10 Years of existence ?',"id":1,"remarks":'Has 20 years of experience'},
        {"criteria":'Presence in minimum 3 Locations ?',"id":2,"remarks":'Located in 5 places'},
        {"criteria":'Has more than 50 employess and not more than 500 ? ',"id":3,"remarks":'Has 350 employees'},
        {"criteria":'Do they have good website ? ',"id":4,"remarks":' Yes, www.optionmatrix.org'}
    ];

    filterToggle: boolean = false;

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
    }



}
