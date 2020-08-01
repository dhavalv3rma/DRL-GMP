import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-section-dialog',
  templateUrl: './add-section-dialog.component.html',
  styleUrls: ['./add-section-dialog.component.scss']
})
export class AddSectionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSectionDialogComponent>,) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveSection() {
    this.dialogRef.close();
  }

}
