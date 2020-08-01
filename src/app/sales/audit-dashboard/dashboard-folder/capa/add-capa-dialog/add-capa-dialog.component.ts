import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-capa-dialog',
  templateUrl: './add-capa-dialog.component.html',
  styleUrls: ['./add-capa-dialog.component.scss']
})
export class AddCapaDialogComponent implements OnInit {

  public dateTime2: Date;

  constructor(public dialogRef: MatDialogRef<AddCapaDialogComponent>,@Inject(MAT_DIALOG_DATA) public diary:any) { }
  
  agendaItems =["Sharath","Sriram","Rahul","Abhinandan","Jesper","Navin","Pranab",];

  status =["Logged","Initiated","Processed","Near Final","Done","Delayed","Overdue"];

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
