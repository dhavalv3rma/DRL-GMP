import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-agenda-template',
  templateUrl: './add-agenda-template.component.html',
  styleUrls: ['./add-agenda-template.component.scss']
})
export class AddAgendaTemplateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAgendaTemplateComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

}
