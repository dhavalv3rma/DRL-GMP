import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-expense-code-dialog',
  templateUrl: './add-expense-code-dialog.component.html',
  styleUrls: ['./add-expense-code-dialog.component.scss']
})
export class AddExpenseCodeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddExpenseCodeDialogComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

  expenseTypes=["CAD / kilometer ($ / km)","CAD / hour ($ / hr)","CAD ($)","Open"]


}