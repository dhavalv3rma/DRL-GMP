import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDialogComponent } from 'src/app/admin/users/user-dialog/user-dialog.component';

@Component({
  selector: 'app-bestpractice-dialog',
  templateUrl: './bestpractice-dialog.component.html',
  styleUrls: ['./bestpractice-dialog.component.scss']
})
export class BestpracticeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number) {  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
   // this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
