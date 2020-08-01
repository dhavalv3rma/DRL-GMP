import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-email-dialog',
  templateUrl: './add-email-dialog.component.html',
  styleUrls: ['./add-email-dialog.component.scss']
})
export class AddEmailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEmailDialogComponent>,@Inject(MAT_DIALOG_DATA) public audit: any,) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
