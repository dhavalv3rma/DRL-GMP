import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import {PageEvent} from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashesComponent implements OnInit {

  Users: any;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

    filterToggle: boolean;
    pageEvent: PageEvent;
    public pageSize = '10';
    public currentPage = 1;
    public totalSize = 15;
    public searchText: string;
    public page: any;
    public settings: Settings;
    public name_filter = "";
    public status_filter = "";
    canCreate:any;
    canUpdate:any;
    canDelete:any;
    showEmpty: boolean = false;
    year: any;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) {
      this.settings = this.appSettings.settings;
     }

     public handlePage(e: any) {
      this.currentPage = e.pageIndex;
      this.pageSize = e.pageSize;
  }

  audits = [
    {group : "CTO",unit : "CTO-1",cycle:'Cycle-1',  scheduleDate : "15/01/2019", auditDate : "17/01/2019", conductDate : "17/01/2019", auditReport : "25/01/2019", auditeeResponse : "30/01/2019", auditorRemarks : "05/02/2019", capaCreated : "07/02/2019", capaClosed : "14/02/2019", auditClosed : "20/02/2019", percent:'23%', observe:'6'},
    {group : "CTO",unit : "CTO-2",cycle:'Cycle-1',  scheduleDate : "19/01/2019", auditDate : "21/01/2019", conductDate : "21/01/2019", auditReport : "27/01/2019", auditeeResponse : "04/02/2019", auditorRemarks : "09/02/2019", capaCreated : "12/02/2019", capaClosed : "17/02/2019", auditClosed : "25/02/2019", percent:'10%', observe:'1'},
    {group : "FTO",unit : "FTO-1",cycle:'Cycle-2',  scheduleDate : "25/04/2019", auditDate : "29/04/2019", conductDate : "30/04/2019", auditReport : "10/05/2019", auditeeResponse : "20/05/2019", auditorRemarks : "22/05/2019", capaCreated : "25/05/2019", capaClosed : "06/06/2019", auditClosed : "10/06/2019", percent:'20%', observe:'12'},
    {group : "CTO",unit : "CTO-3",cycle:'Cycle-1',  scheduleDate : "11/05/2019", auditDate : "19/05/2019", conductDate : "19/05/2019", auditReport : "27/05/2019", auditeeResponse : "10/06/2019", auditorRemarks : "21/06/2019", capaCreated : "12/06/2019", capaClosed : "15/06/2019", auditClosed : "27/06/2019", percent:'15%', observe:'16'},
    {group : "CTO",unit : "CTO-4",cycle:'Cycle-2',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "23/06/2019", auditorRemarks : "26/06/2019", capaCreated : "25/05/2019", capaClosed : "22/06/2019", auditClosed : "10/06/2019", percent:'10%', observe:'3'},
    {group : "FTO",unit : "FTO-2",cycle:'Cycle-2',  scheduleDate : "27/06/2019", auditDate : "05/01/2019", conductDate : "17/01/2019",auditReport : "12/01/2019", auditeeResponse : "24/01/2019", auditorRemarks : "12/02/2019", capaCreated : "18/02/2019", capaClosed : "12/02/2019", auditClosed : "12/02/2019", percent:'19%', observe:'21'},
    {group : "FTO",unit : "FTO-3",cycle:'Cycle-1',  scheduleDate : "09/07/2019", auditDate : "04/01/2019", conductDate : "17/01/2019",auditReport : "14/01/2019", auditeeResponse : "30/01/2019", auditorRemarks : "05/02/2019", capaCreated : "07/02/2019", capaClosed : "13/02/2019", auditClosed : "11/02/2019", percent:'10%', observe:'21'},
    {group : "FTO",unit : "FTO-4",cycle:'Cycle-2',  scheduleDate : "17/08/2019", auditDate : "17/01/2019", conductDate : "17/01/2019",auditReport : "25/01/2019", auditeeResponse : "22/01/2019", auditorRemarks : "11/02/2019", capaCreated : "09/02/2019", capaClosed : "13/02/2019", auditClosed : "17/02/2019", percent:'16%', observe:'43'},
    {group : "CTO",unit : "CTO-5",cycle:'Cycle-1',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "23/06/2019", auditorRemarks : "26/06/2019", capaCreated : "12/06/2019", capaClosed : "15/06/2019", auditClosed : "27/06/2019", percent:'10%', observe:'8'},
    {group : "CTO",unit : "CTO-6",cycle:'Cycle-2',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "10/06/2019", auditorRemarks : "21/06/2019", capaCreated : "12/06/2019", capaClosed : "15/06/2019", auditClosed : "27/06/2019", percent:'35%', observe:'9'},
    {group : "CTO",unit : "CTO-7",cycle:'Cycle-2',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "30/01/2019", auditorRemarks : "05/02/2019", capaCreated : "07/02/2019", capaClosed : "14/02/2019", auditClosed : "20/02/2019", percent:'18%', observe:'10'},
    {group : "FTO",unit : "FTO-5",cycle:'Cycle-1',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "23/06/2019", auditorRemarks : "26/06/2019", capaCreated : "25/05/2019", capaClosed : "22/06/2019", auditClosed : "10/06/2019", percent:'10%', observe:'12'},
    {group : "R & D",unit : "IPDO-Hyderabad",cycle:'Cycle-1',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "23/06/2019", auditorRemarks : "05/02/2019", capaCreated : "07/02/2019", capaClosed : "14/02/2019", auditClosed : "20/02/2019", percent:'27%', observe:'18'},
    {group : "R & D",unit : "IPDO-Bangalore",cycle:'Cycle-1',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "19/05/2019", auditReport : "27/05/2019", auditeeResponse : "10/06/2019", auditorRemarks : "21/06/2019", capaCreated : "12/06/2019", capaClosed : "15/06/2019", auditClosed : "27/06/2019", percent:'10%', observe:'5'},
    {group : "CFA",unit : "CFA-1",cycle:'Cycle-2',  scheduleDate : "28/05/2019",auditDate : "02/06/2019", conductDate : "19/05/2019", auditReport : "27/05/2019", auditeeResponse : "10/06/2019", auditorRemarks : "21/06/2019", capaCreated : "12/06/2019", capaClosed : "15/06/2019", auditClosed : "27/06/2019", percent:'10%', observe:'4'},
    {group : "CFA",unit : "CFA-2",cycle:'Cycle-2',  scheduleDate : "28/05/2019", auditDate : "02/06/2019", conductDate : "06/06/2019", auditReport : "21/06/2019", auditeeResponse : "23/06/2019", auditorRemarks : "26/06/2019", capaCreated : "12/06/2019", capaClosed : "15/06/2019", auditClosed : "27/06/2019", percent:'29%', observe:'3'},
  ];

  ngOnInit() {
  }

}
