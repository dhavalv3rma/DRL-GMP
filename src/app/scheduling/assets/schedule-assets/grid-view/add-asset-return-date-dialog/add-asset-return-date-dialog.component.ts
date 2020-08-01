import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-asset-return-date-dialog',
  templateUrl: './add-asset-return-date-dialog.component.html',
  styleUrls: ['./add-asset-return-date-dialog.component.scss']
})
export class AddAssetReturnDateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAssetReturnDateDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}