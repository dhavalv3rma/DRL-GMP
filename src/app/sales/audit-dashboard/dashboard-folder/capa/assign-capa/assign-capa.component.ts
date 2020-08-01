import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-assign-capa',
  templateUrl: './assign-capa.component.html',
  styleUrls: ['./assign-capa.component.scss']
})
export class AssignCapaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AssignCapaComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
