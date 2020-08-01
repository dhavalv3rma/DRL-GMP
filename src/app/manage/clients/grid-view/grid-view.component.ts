import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { MatDialog } from '@angular/material';
import { ManageService } from '../../manage.service';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component'
import { Clients } from '../clients.model';
import { ClientsDialogComponent } from '../clients-dialog/clients-dialog.component';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';

@Component({
    selector: 'app-grid-view',
    templateUrl: './grid-view.component.html',
    styleUrls: ['./grid-view.component.scss'],
    encapsulation: ViewEncapsulation.None
  })

//   @Pipe({
//     name: 'splitComma'
//   })
//   export class SplitCommaStringPipe implements PipeTransform {
//     transform(val:string):string {
//       return val.split(',')[0];
//     }
//   }


  export class GridViewComponent implements OnInit {
    isGrid: boolean = true;
    isChecked :boolean = false;
    checked = false;
    labelPosition = 'after';
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
        {title:"OptionMatrix",location:"Hyderabad", auditors:1,agenda:1,dairy:1,capa:"34 / 23 / 12",audit_configure:"",action_plan:"12 / 27", closure_configure : "", status:true, scheduled:"2019-05-02",initiated:"2019-05-20", reported:"2019-05-20", activity:"2019-05-20", closed:"2019-05-20", timeline : 1, stage : '', progress: ''}
    ];

    projects = [
        {clientName:"City Homes",clienttype:"CITYHM",manager:"Dwayne",survey:"9/10",projectname:"5-12564" ,phone:"(416) 920-5100",acivities:"5/10",deliverables:"3/10",actions:"8/10",review:"6/10",schedule:"7",overview:"5",billing:"8",docs:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
        {clientName:"Delpark Homes",clienttype:"DELHOME",manager:"Dave",survey:"2/10",projectname:"4-24642" ,phone:"(616) 426-6523",acivities:"9/10",deliverables:"2/10",actions:"6/10",review:"7/10",schedule:"3",overview:"6",billing:"4",docs:"9",completion:"76%",status:"Active",datecreated:"04/10/2019",duedate:"05/14/2019",statuss:"Moderate",active:"No",projecttype:"Engineering",startdate:"04/20/2019",completiondate:"05/27/2019"},
        {clientName:"Hydro One",clienttype:"HYDRO",manager:"Dwayne",survey:"6/10",projectname:"4-82324" ,phone:"(325) 980-0051",acivities:"3/10",deliverables:"6/10",actions:"8/10",review:"1/10",schedule:"9",overview:"2",billing:"6",docs:"2",completion:"88%",status:"Active",datecreated:"04/12/2019",duedate:"05/16/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/02/2019",completiondate:"05/25/2019"},
        {clientName:"Sandbank Homes",clienttype:"SANDHOME",manager:"Dave",survey:"3/10",projectname:"6-10235" ,phone:"(563) 856-3589",acivities:"1/10",deliverables:"5/10",actions:"3/10",review:"8/10",schedule:"2",overview:"3",billing:"8",docs:"7",completion:"92%",status:"Active",datecreated:"04/18/2019",duedate:"05/20/2019",statuss:"Stagnant",active:"Yes",projecttype:"Internal",startdate:"05/11/2019",completiondate:"05/26/2019"},
        {clientName:"Valleymede Homes",clienttype:"VALLEY ",manager:"Dwayne",survey:"1/10",projectname:"2-51152" ,phone:"(456) 694-1254",acivities:"6/10",deliverables:"1/10",actions:"5/10",review:"2/10",schedule:"4",overview:"7",billing:"9",docs:"3",completion:"86%",status:"Active",datecreated:"04/21/2019",duedate:"05/21/2019",statuss:"Fast",active:"No",projecttype:"Legal",startdate:"04/18/2019",completiondate:"05/24/2019"},
        {clientName:"AECOM",clienttype:"AECOM",survey:"8/10",manager:"Dave",projectname:"7-14164" ,phone:"(312) 785-5522",acivities:"10/10",deliverables:"7/10",actions:"2/10",review:"9/10",schedule:"1/10",overview:"5",billing:"1",docs:"6",completion:"95%",status:"Active",datecreated:"04/29/2019",duedate:"05/25/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/01/2019",completiondate:"05/23/2019"},
    ];

    audits = [
        {location:"CTO - 1",targetDate:"21/06/2019",auditDate:"21/06/2019",agenda:"9/10",checklist:"60/110" ,diary:"314 (9)",auditReport:"5/10",capa:"3/10",actionPlan:"18/47",timeline:"304",auditTeam:"7",stage:"CAPA",Progress:"8",state:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
        {location:"FTO - 1",targetDate:"04/06/2019",auditDate:"05/06/2019",agenda:"15/20",checklist:"50/94" ,diary:"416 (15)",auditReport:"15/20",capa:"10/27",actionPlan:"28/35",timeline:"258",auditTeam:"5",stage:"Auditee Response",Progress:"8",state:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
        {location:"CTO - 2",targetDate:"13/06/2019",auditDate:"15/06/2019",agenda:"5/18",checklist:"40/112" ,diary:"354 (5)",auditReport:"5/8",capa:"10/25",actionPlan:"8/10",timeline:"152",auditTeam:"6",stage:"Action Plan",Progress:"8",state:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
        {location:"CTO - 3",targetDate:"01/06/2019",auditDate:"01/06/2019",agenda:"12/24",checklist:"12/47" ,diary:"257 (12)",auditReport:"3/7",capa:"30/56",actionPlan:"15/30",timeline:"369",auditTeam:"3",stage:"Audit Closed",Progress:"8",state:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
        {location:"FTO - 2",targetDate:"01/06/2019",auditDate:"10/06/2019",agenda:"3/19",checklist:"65/100" ,diary:"367 (3)",auditReport:"2/9",capa:"3/10",actionPlan:"19/22",timeline:"409",auditTeam:"4",stage:"Initiated",Progress:"8",state:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
        // {clientName:"Delpark Homes",clienttype:"DELHOME",manager:"Dave",survey:"2/10",projectname:"4-24642" ,phone:"(616) 426-6523",acivities:"9/10",deliverables:"2/10",actions:"6/10",review:"7/10",schedule:"3",overview:"6",billing:"4",docs:"9",completion:"76%",status:"Active",datecreated:"04/10/2019",duedate:"05/14/2019",statuss:"Moderate",active:"No",projecttype:"Engineering",startdate:"04/20/2019",completiondate:"05/27/2019"},
        // {clientName:"Hydro One",clienttype:"HYDRO",manager:"Dwayne",survey:"6/10",projectname:"4-82324" ,phone:"(325) 980-0051",acivities:"3/10",deliverables:"6/10",actions:"8/10",review:"1/10",schedule:"9",overview:"2",billing:"6",docs:"2",completion:"88%",status:"Active",datecreated:"04/12/2019",duedate:"05/16/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/02/2019",completiondate:"05/25/2019"},
        // {clientName:"Sandbank Homes",clienttype:"SANDHOME",manager:"Dave",survey:"3/10",projectname:"6-10235" ,phone:"(563) 856-3589",acivities:"1/10",deliverables:"5/10",actions:"3/10",review:"8/10",schedule:"2",overview:"3",billing:"8",docs:"7",completion:"92%",status:"Active",datecreated:"04/18/2019",duedate:"05/20/2019",statuss:"Stagnant",active:"Yes",projecttype:"Internal",startdate:"05/11/2019",completiondate:"05/26/2019"},
        // {clientName:"Valleymede Homes",clienttype:"VALLEY ",manager:"Dwayne",survey:"1/10",projectname:"2-51152" ,phone:"(456) 694-1254",acivities:"6/10",deliverables:"1/10",actions:"5/10",review:"2/10",schedule:"4",overview:"7",billing:"9",docs:"3",completion:"86%",status:"Active",datecreated:"04/21/2019",duedate:"05/21/2019",statuss:"Fast",active:"No",projecttype:"Legal",startdate:"04/18/2019",completiondate:"05/24/2019"},
        // {clientName:"AECOM",clienttype:"AECOM",survey:"8/10",manager:"Dave",projectname:"7-14164" ,phone:"(312) 785-5522",acivities:"10/10",deliverables:"7/10",actions:"2/10",review:"9/10",schedule:"1/10",overview:"5",billing:"1",docs:"6",completion:"95%",status:"Active",datecreated:"04/29/2019",duedate:"05/25/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/01/2019",completiondate:"05/23/2019"},
    ];
    ngOnInit() {
        this.getleads();
        console.log(this.clients)
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
            width: '850px',
        });

        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
                // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
            }
        });
    }

    public openRemarksDialog(lead) {
        let dialogRef = this.dialog.open(RemarksDialogComponent, {
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

    public openTeamDialog(lead) {
        let dialogRef = this.dialog.open(TeamDialogComponent, {
            data: lead,
            height: 'auto',
            width: '250px',
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

    public scrollscreen(side) {
        console.log(side);
        var ele = document.getElementById('example2');
        if(side == 'left')
            ele.scrollLeft += 190;
        else
        ele.scrollLeft -= 190;
    }

  }