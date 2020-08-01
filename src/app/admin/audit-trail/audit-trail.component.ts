import { Component, OnInit } from '@angular/core';
import { AuditTrailDialogComponent } from '../audit-trail-dialog/audit-trail-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {
  audits=[
    {date:"17 Jun 2019",user : 'Jon Doe', role: 'Auditor', module : 'Audits', event : 'Add', description:"Audit created successfully"}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openActionDialog() {
    let dialogRef = this.dialog.open(AuditTrailDialogComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
