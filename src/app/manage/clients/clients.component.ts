import { Component, OnInit, ViewEncapsulation,  ViewChild} from '@angular/core';
import { ClientsDialogComponent } from './clients-dialog/clients-dialog.component';
import { AppSettings } from '../../app.settings';
import { MatDialog } from '@angular/material';
import { ManageService } from '../manage.service';
import { Settings } from '../../app.settings.model';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Clients } from './clients.model';
import { ClientsGridColDialogComponent } from './clients-grid-col-dialog/clients-grid-col-dialog.component';
import {GridViewComponent} from './grid-view/grid-view.component'
import { HelpVideoDialogComponent } from '../../shared/help-video-dialog/help-video-dialog.component';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers : [GridViewComponent]
})

export class ClientsComponent implements OnInit {

    @ViewChild(GridViewComponent) child:GridViewComponent;

    isGridView: boolean = true;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
    public cancelClicked: boolean = false;

    filterToggle: boolean = false;
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
    public selectedAll : any;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public manageService: ManageService) {
        this.settings = this.appSettings.settings;
    }

    clients = [
        {clientcodes:"CITHOM",streetaddress:"147 Danforth Ave, Toronto, ON M4K 1N2, Canada",clientName:"City Homes",type:"Engineer/Engineering firm",municipality:"Toronto" ,city:"Toronto",postcode:"M1R 0E9.",projects:"1",accountsmanager:"Dave",contactperson:"Kevin Thomas",phone:"(416) 920-5100",email:"project@cityhomes.com",datecreated:"2019-05-02",datelastactive:"2019-05-20",quotes:"2"},
        {clientcodes:"DELPAR",streetaddress:"110 Laurier Ave W, Ottawa, ON K1P 1J1, Canada",clientName:"Delpark",type:"Private land owner",municipality:"Ottawa" ,city:"Ottawa",postcode:"M3C 0C1",projects:"2",accountsmanager:"Dwayne",contactperson:"William Jacob",phone:"(516) 920-5111",email:"project@delparkhomes.com",datecreated:"2019-04-25",datelastactive:"2019-05-25",quotes:"5"},
        {clientcodes:"HYDROO",streetaddress:"660 Eglinton Ave W #5B, Mississauga, ON L5R 3V2, Canada",clientName:"Hydro One",type:"Business",municipality:"Mississauga" ,city:"Mississauga",postcode:"M3C 0C2",projects:"3",accountsmanager:"Dave",contactperson:"Liam White",phone:"(816) 920-5122",email:"project@hydroone.com",datecreated:"2019-04-10",datelastactive:"2019-05-10",quotes:"7"},
        {clientcodes:"SANHOM",streetaddress:"25 Peel Centre Dr, Brampton, ON L6T 3R5, Canada",clientName:"Sandbank Homes",type:"Home builder",municipality:"Brampton" ,city:"Brampton",postcode:"M3C 0C3",projects:"4",accountsmanager:"Dwayne",contactperson:"Martin Zeller",phone:"(416) 920-6100",email:"project@sandbank.com",datecreated:"2019-05-05",datelastactive:"2019-05-15",quotes:"6"},
        {clientcodes:"NMHOME ",streetaddress:"135 Fennell Ave W, Hamilton, ON L9C 0E5, Canada",clientName:"NM Homes",type:"Law firm",municipality:"Hamilton" ,city:"Hamilton",postcode:"M3C 0H9",projects:"2",accountsmanager:"Dave",contactperson:"Isaac Walker",phone:"(416) 920-7100",email:"project@valleymede.com",datecreated:"2019-03-01",datelastactive:"2019-04-01",quotes:"9"},
        {clientcodes:"AECOM",streetaddress:"100 Traders Blvd E, Mississauga, ON L4Z 2H7, Canada",clientName:"AECOM",type:"Government",municipality:"Mississauga" ,city:"Mississauga",postcode:"90001",projects:"1",accountsmanager:"Dave",contactperson:"Justin Hazelwood",phone:"(613) 471-2001",email:"project@AECOM.com",datecreated:"2019-03-20",datelastactive:"2019-04-20",quotes:"1"},
        {clientcodes:"PITPIC",streetaddress:"1515 Bathurst St, York, ON M5P 3H4, Canada",clientName:"City Pickering",type:"Realtor",municipality:"Toronto" ,city:"Toronto",postcode:"M3C 0E4",projects:"4",accountsmanager:"Dave",contactperson:"Shawn Marsh",phone:"(813) 471-9001",email:"project@pickering.com",datecreated:"2019-04-15",datelastactive:"2019-05-15",quotes:"5"},
        {clientcodes:"STANTE",streetaddress:"303 Orenda Road West B, Brampton, ON L6T 5C3, Canada",clientName:"Stantec",type:"Developer",municipality:"Brampton" ,city:"Brampton",postcode:"M3C 0E1",projects:"6",accountsmanager:"Dwayne",contactperson:"Mark Willson",phone:"(613) 471-3000",email:"project@stantec.com",datecreated:"2019-04-21",datelastactive:"2019-05-21",quotes:"3"},
    ];
    ngOnInit() {
        this.getleads();
    }

    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;

    onColorOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    
    prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
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
    onLocationOptionsSelected(event){
    console.log(event); //option value will be sent as event
    }
    
    
    public getleads(): void {
        this.leads = null; //for show spinner each time
        this.manageService.getleads().subscribe(
            leads => {
               // this.leads = leads.slice(0,8);
            }
        );
    }

    public addlead(lead) {
        this.manageService.addlead(lead).subscribe(lead => this.getleads());
    }
    public updatelead(lead) {
        this.manageService.updatelead(lead).subscribe(lead => this.getleads());
    }
    public deletelead(lead) {
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
        let dialogRef = this.dialog.open(ClientsDialogComponent, {
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


        public opengridColDialog(lead) {
            let dialogRef = this.dialog.open(ClientsGridColDialogComponent, {
                data: lead,
                height: 'auto',
                width: '400px',
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
            this.dialog.closeAll();
            return account;
        });
    }


    public openHelpVideo(id) {
        let dialogRef = this.dialog.open(HelpVideoDialogComponent, {
            data: id,
            height: 'auto',
            width: '850px'
        });

        dialogRef.afterClosed().subscribe(data => {
        });
    }

    selectAll() {
        for (var i = 0; i < this.leads.length; i++) {
            this.leads[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.leads.every(function(item:any) {
            return item.selected == true;
        })
    }

    
  }