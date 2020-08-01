import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-sub-category-dialog',
  templateUrl: './add-sub-category-dialog.component.html',
  styleUrls: ['./add-sub-category-dialog.component.scss']
})
export class AddSubCategoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSubCategoryDialogComponent>) { }

  categories =["Quality Systems","Production Systems","Laboratory System","Facility & Equipment Systems","Material Management Systems","Packaging & Labelling Systems"];

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

}
