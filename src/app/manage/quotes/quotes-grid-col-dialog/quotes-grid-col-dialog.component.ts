import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quotes-grid-col-dialog',
  templateUrl: './quotes-grid-col-dialog.component.html',
  styleUrls: ['./quotes-grid-col-dialog.component.scss']
})
export class QuotesGridColDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<QuotesGridColDialogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialog.close();
  }

}
