import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-audit-report',
  templateUrl: './audit-report.component.html',
  styleUrls: ['./audit-report.component.scss'],encapsulation: ViewEncapsulation.None,
})
export class AuditReportComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  //tableList: any;

  ngOnInit() {
  }

  tableList: Object[] = [
    { intlistId: 1,name: 'Objective', description:"The objective of the audit is to assess the compliance level of Manufacturing facility", count:4, status:true},
    { intlistId: 2,name: 'Scope', description:"The compliance audit will focus on the quality system involved in manufacturing", count:5, status:true},
    { intlistId: 2,name: 'Schedule', description:"We anticipate starting the audit on 19th March 2018, at 09:00 AM with an opening meeting at CTO Unit-I", count:5, status:true},
    { intlistId: 2,name: 'Information Request', description:"It would be of assistance and help us to minimize the time necessary to fully evaluate the laboratory", count:5, status:true},
    { intlistId: 2,name: 'Assessment Standards', description:"The review will be conducted using the various regulatory guidance's and standards", count:5, status:true},
    { intlistId: 2,name: 'Proposed Itinerary', description:"The auditors will reach the site by around 9:00 hours in the morning on the proposed dates of audit", count:5, status:true},
    { intlistId: 2,name: 'reporting', description:"An immediate report may be outlined and be given as onsite assessment report and the detailed report will be issued within 15 days from the date audit closure", count:5, status:true},
  ];

  // public openUserDialog(id) {
  //   let dialogRef = this.dialog.open(AddCheckListDialogComponent, {
  //       data: id,
  //       height: 'auto',
  //       width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  deleteLookup() {
    //this.alertService.createAlert('Successfully deleted.', 1);
    this.dialog.closeAll();
  }

}
