import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-lead-source-dialog',
  templateUrl: './add-lead-source-dialog.component.html',
  styleUrls: ['./add-lead-source-dialog.component.scss']
})
export class AddLeadSourceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddLeadSourceDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}