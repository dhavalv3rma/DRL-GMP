import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material';
import {PageEvent} from '@angular/material';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardsComponent implements OnInit {

  Users: any;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

    filterToggle: boolean;
    pageEvent: PageEvent;
    public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') :'5');
    public currentPage = 0;
    public totalSize = 0;
    public searchText: string;
    public page: any;
    public settings: Settings;
    public name_filter = "";
    public status_filter = "";
    canCreate:any;
    canUpdate:any;
    canDelete:any;
    showEmpty: boolean = true;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) { 
      this.settings = this.appSettings.settings;
    }

    public handlePage(e: any) {
      this.currentPage = e.pageIndex;
      this.pageSize = e.pageSize;
  }

  ngOnInit() {
    console.log("hello");
  }

}
