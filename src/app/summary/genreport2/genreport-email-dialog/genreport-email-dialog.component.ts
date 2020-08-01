import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddEmailDialogComponent } from 'src/app/sales/audit-dashboard/dashboard-folder/audit-closed/add-email-dialog/add-email-dialog.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-genreport-email-dialog',
  templateUrl: './genreport-email-dialog.component.html',
  styleUrls: ['./genreport-email-dialog.component.scss']
})
export class GenreportEmailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEmailDialogComponent>,@Inject(MAT_DIALOG_DATA) public audit: any,private alertService: AlertService) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }
  alert() {
    this.alertService.createAlert('Report sent successfully', 1);
  }
}
