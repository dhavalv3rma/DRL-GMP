import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-diary-dialog',
  templateUrl: './add-diary-dialog.component.html',
  styleUrls: ['./add-diary-dialog.component.scss']
})
export class AddDiaryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDiaryDialogComponent>,@Inject(MAT_DIALOG_DATA) public diary:any) { }
  
  agendaItems =["Objective","Scope","Schedule","Information Request","Assessment Standards","Property Itinerary","Reporting",];

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
