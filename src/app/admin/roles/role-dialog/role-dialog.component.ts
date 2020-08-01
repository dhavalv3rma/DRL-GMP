import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RoleDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {  }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
