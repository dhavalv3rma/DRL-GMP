import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-asset-dialog',
  templateUrl: './add-asset-dialog.component.html',
  styleUrls: ['./add-asset-dialog.component.scss']
})
export class AddAssetDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddAssetDialogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
