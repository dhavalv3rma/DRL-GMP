import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-remarks-dialog',
  templateUrl: './remarks-dialog.component.html',
  styleUrls: ['./remarks-dialog.component.scss']
})
export class RemarksDialogComponent implements OnInit {

  myLabel:boolean = true;

  myLabels:boolean = false;

  constructor(public dialogRef: MatDialogRef<TeamDialogComponent>,@Inject(MAT_DIALOG_DATA) public unit: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveTeam() {
    this.dialogRef.close();
  }

}
