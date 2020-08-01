import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Leads } from './leads.model';
import { MatDialog } from '@angular/material';
import { LeadsDialogComponent } from './leads-dialog/leads-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component'
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';

@Component({
    selector: 'app-leads',
    templateUrl: './leads.component.html',
    styleUrls: ['./leads.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LeadsComponent implements OnInit {

    filterToggle: boolean = false;
    // constructor() { }

    // ngOnInit() {
    // }

    // tableList: Object[] = [
    //   { intCompanyId: 1, companyName: 'Asterix Healtcare Ltd', contactPerson: 'Henry Dan', contactNumber: '1-604-555-5555', timeline: '2/6', Location: 'Vancouver(CA)', Industry: 'Healthcare', prospects: '3' },
    //   { intCompanyId: 2, companyName: 'ACE Financial Ltd', contactPerson: 'Paul Ray', contactNumber: '1-284-295-5682', timeline: '4/6', Location: 'British Columbia(CA)', Industry: 'Finance', prospects: '4' },
    //   { intCompanyId: 3, companyName: 'DYN Infrastructures', contactPerson: 'Steven Kell', contactNumber: '1-334-206-5632', timeline: '3/6', Location: 'Ontario(CA)', Industry: 'Infrastructure', prospects: '5' }
    // ];

    public leads: Leads[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        ) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getleads();
    }

    public getleads(): void {
        this.leads = null; //for show spinner each time
        // this.marketingService.getleads().subscribe(
        //     leads => {
        //         this.leads = leads.slice(1,6);
        //     }
        // );
    }
    // public addlead(lead: Leads) {
    //     this.marketingService.addlead(lead).subscribe(lead => this.getleads());
    // }
    // public updatelead(lead: Leads) {
    //     this.marketingService.updatelead(lead).subscribe(lead => this.getleads());
    // }
    // public deletelead(lead: Leads) {
    //     this.marketingService.deletelead(lead.id).subscribe(lead => this.getleads());
    // }


    public onPageChanged(event) {
        this.page = event;
        this.getleads();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openleadDialog(lead) {
        let dialogRef = this.dialog.open(LeadsDialogComponent, {
            data: lead,
            height: 'auto',
            width: '600px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
                // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
            }
        });
    }

    public openConfirmDialog(action,value,name) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data:{'action':action,'value':value,'name':name}
        });
    
        dialogRef.afterClosed().subscribe(account => {
            console.log(account);
            this.dialog.closeAll();
            return account;
        });
    }


}
