import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDocDialogComponent } from 'src/app/sales/audit-dashboard/dashboard-folder/auditee-response/add-doc-dialog/add-doc-dialog.component';

@Component({
  selector: 'app-audit-trail-dialog',
  templateUrl: './audit-trail-dialog.component.html',
  styleUrls: ['./audit-trail-dialog.component.scss']
})
export class AuditTrailDialogComponent implements OnInit {
  public dateTime2: Date;

  constructor(public dialogRef: MatDialogRef<AddDocDialogComponent>, @Inject(MAT_DIALOG_DATA) public diary: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
