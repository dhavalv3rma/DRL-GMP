import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-checklist-template',
  templateUrl: './add-checklist-template.component.html',
  styleUrls: ['./add-checklist-template.component.scss']
})
export class AddChecklistTemplateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddChecklistTemplateComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

}
