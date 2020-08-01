import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEmailDialogComponent } from './add-email-dialog/add-email-dialog.component';

@Component({
  selector: 'app-audit-closed',
  templateUrl: './audit-closed.component.html',
  styleUrls: ['./audit-closed.component.scss']
})
export class AuditClosedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  public openEmailDialog(id) {
    let dialogRef = this.dialog.open(AddEmailDialogComponent, {
        data: id,
        height: 'auto',
        width: '500px',
        autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  emailReport() {

  }

}
