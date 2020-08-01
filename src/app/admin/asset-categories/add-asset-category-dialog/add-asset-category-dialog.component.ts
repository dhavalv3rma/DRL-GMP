import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-asset-category-dialog',
  templateUrl: './add-asset-category-dialog.component.html',
  styleUrls: ['./add-asset-category-dialog.component.scss']
})
export class AddAssetCategoryDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddAssetCategoryDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}