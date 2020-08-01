import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss']
})
export class TeamDialogComponent implements OnInit {

  myLabel:boolean = true;

  myLabels:boolean = false;

  constructor(public dialogRef: MatDialogRef<TeamDialogComponent>,@Inject(MAT_DIALOG_DATA) public unit: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveTeam() {
   // this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
