import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-departs-dialog',
  templateUrl: './add-departs-dialog.component.html',
  styleUrls: ['./add-departs-dialog.component.scss']
})
export class AddDepartsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDepartsDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveDepartment() {
    this.dialogRef.close();
  }

}
