import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-class-codes-dialog',
  templateUrl: './class-codes-dialog.component.html',
  styleUrls: ['./class-codes-dialog.component.scss']
})
export class ClassCodeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassCodeDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}