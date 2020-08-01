import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-repeat-observations',
  templateUrl: './add-repeat-observations.component.html',
  styleUrls: ['./add-repeat-observations.component.scss']
})
export class AddRepeatObservationsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddRepeatObservationsComponent>) { }

  ngOnInit() {
  }

  
  close() {
    this.dialogRef.close();
  }
}
