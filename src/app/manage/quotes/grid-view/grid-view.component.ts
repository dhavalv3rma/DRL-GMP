import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Clients } from '../../clients/clients.model';
import { ManageService } from '../../manage.service';
import { QuotesDialogComponent } from '../quotes-dialog/quotes-dialog.component';
import { ClientsDialogComponent } from '../../clients/clients-dialog/clients-dialog.component';

@Component({
    selector: 'app-grid-view',
    templateUrl: './grid-view.component.html',
    styleUrls: ['./grid-view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GridViewComponent implements OnInit {
    istabs: boolean = true;
    tab1: boolean = true;
    tab2: boolean = false;
    lead: any;
    // isGrid: boolean = true;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
    public cancelClicked: boolean = false;

    gridview: boolean = true;
    mapview: boolean = false;
    kanbanview: boolean = false;
    filterToggle: boolean = false;

    public openClientModal(id) {
        let dialogRef = this.dialog.open(ClientsDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });
    
        dialogRef.afterClosed().subscribe(data => {
        });
    }

    GridView() {
        this.gridview = true;
        this.mapview = false;
        this.kanbanview = false;

    }
    MapView() {
        this.gridview = false;
        this.mapview = true;
        this.kanbanview = false;
    }
    KanbanView() {
        this.gridview = false;
        this.mapview = false;
        this.kanbanview = true;
    }
    // constructor() { }

    // ngOnInit() {
    // }

    // tableList: Object[] = [
    //   { intCompanyId: 1, companyName: 'Asterix Healtcare Ltd', contactPerson: 'Henry Dan', contactNumber: '1-604-555-5555', timeline: '2/6', Location: 'Vancouver(CA)', Industry: 'Healthcare', prospects: '3' },
    //   { intCompanyId: 2, companyName: 'ACE Financial Ltd', contactPerson: 'Paul Ray', contactNumber: '1-284-295-5682', timeline: '4/6', Location: 'British Columbia(CA)', Industry: 'Finance', prospects: '4' },
    //   { intCompanyId: 3, companyName: 'DYN Infrastructures', contactPerson: 'Steven Kell', contactNumber: '1-334-206-5632', timeline: '3/6', Location: 'Ontario(CA)', Industry: 'Infrastructure', prospects: '5' }
    // ];

    public leads: Clients[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    public selectedAll: any;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public manageService: ManageService) {
        this.settings = this.appSettings.settings;
    }

    clients = [
        { status: "Active",timeline:"2",quoteNumber:"Q-190001",date:"2019-05-25",quoteAdmin:"James Smith", stage: "Qualified", subject: "Reference Plan", duedate: "25-May-2019", value: "1200", docs: 4, odds: 1, clientName: "Toronto Towers", region: "Isaac Walker", city: "Ontario", postcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(416) 920-5100", quotedamt: "5350", awardedamt: "4321" },
        { status: "Active",timeline:"4",quoteNumber:"Q-190002",date:"2019-05-25",quoteAdmin:"Mary Garcia", stage: "Scope", subject: "Topo", duedate: "25-May-2019", value: "1000", docs: 3, odds: 1, clientName: "Delpark Homes", region: "Henry Wade", city: "Ottawa", postcode: "M1R 0E9.", contactperson: "Dave", phone: "(256) 920-2638", quotedamt: "8684", awardedamt: "7212" },
        { status: "Active",timeline:"3",quoteNumber:"Q-190003",date:"2019-05-25",quoteAdmin:"Maria Rodriguez", stage: "Proposal", subject: "SRPR", duedate: "25-May-2019", value: "1500", docs: 2, odds: 1, clientName: "Hydro One", region: "Martin Zeller", city: "Mississauga", postcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(856) 659-1542", quotedamt: "5221", awardedamt: "3464" },
        { status: "Active",timeline:"7",quoteNumber:"Q-190004",date:"2019-05-25",quoteAdmin:"Mary Smith", stage: "Hold", subject: "Builders", duedate: "25-May-2019", value: "1350", docs: 5, odds: 1, clientName: "Sandbank Homes", region: "Jacob White", city: "Brampton", postcode: "M1R 0E9.", contactperson: "Dave", phone: "(586) 365-4856", quotedamt: "3552", awardedamt: "2352" },
        { status: "Active",timeline:"8",quoteNumber:"Q-190005",date:"2019-05-25",quoteAdmin:"David  Rodriguez", stage: "Expired", subject: "Site Plan", duedate: "25-May-2019", value: "1100", docs: 6, odds: 1, clientName: "Valleymede Homes", region: "Mark Daves", city: "Hamilton", postcode: "M1R 0E9.", contactperson: "Dave", phone: "(236) 949-3648", quotedamt: "5841", awardedamt: "2154" },
        { status: "Active",timeline:"4",quoteNumber:"Q-190006",date:"2019-05-25",quoteAdmin:"Maria Hernandez", stage: "PO", subject: "Lot Line Staking", duedate: "25-May-2019", value: "1250", docs: 1, odds: 1, clientName: "AECOM", region: "John William", city: "Mississauga", postcode: "M1R 0E9.", contactperson: "Dwayne", phone: "(326) 958-1234", quotedamt: "6215", awardedamt: "4313" },
    ];
    ngOnInit() {
        this.getleads();
    }


    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;

    onColorOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR", "SKY"];
    prospectOptionSelected: any;

    onProspectOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    managerOptions = ["Dwayne", "Dave"];
    managerOptionSelected: any;

    onManagerOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    locationOptions = ["Ontario", "Ottawa", "Vancouver", "New york", "Las Vegas", "Copenhagen", "Aarhus"];
    locationOptionSelected: any;
    onLocationOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }


    public getleads(): void {
        this.leads = null; //for show spinner each time
        this.manageService.getleads().subscribe(
            leads => {
                //this.leads = leads.slice(0,8);
            }
        );
    }

    public addlead(lead: Clients) {
        this.manageService.addlead(lead).subscribe(lead => this.getleads());
    }
    public updatelead(lead: Clients) {
        this.manageService.updatelead(lead).subscribe(lead => this.getleads());
    }
    public deletelead(lead: Clients) {
        this.manageService.deletelead(lead.id).subscribe(lead => this.getleads());
    }


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
        let dialogRef = this.dialog.open(QuotesDialogComponent, {
            data: lead,
            height: 'auto',
            width: '850px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
                // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
            }
        });
    }

    public openConfirmDialog(action, value, name) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: { 'action': action, 'value': value, 'name': name }
        });

        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }

    selectAll() {
        for (var i = 0; i < this.leads.length; i++) {
            this.leads[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.leads.every(function (item: any) {
            return item.selected == true;
        })
    }
}