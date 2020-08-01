import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addrecommendation-dialog',
  templateUrl: './addrecommendation-dialog.component.html',
  styleUrls: ['./addrecommendation-dialog.component.scss']
})
export class AddrecommendationDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<AddrecommendationDialogComponent>) { }

  ngOnInit() {
  }

  
  close() {
    this.dialogRef.close();
  }
}
