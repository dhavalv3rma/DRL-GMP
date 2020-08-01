import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-clients-grid-col-dialog',
  templateUrl: './clients-grid-col-dialog.component.html',
  styleUrls: ['./clients-grid-col-dialog.component.scss']
})
export class ClientsGridColDialogComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor(public dialogRef: MatDialogRef<ClientsGridColDialogComponent>) { }


  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
