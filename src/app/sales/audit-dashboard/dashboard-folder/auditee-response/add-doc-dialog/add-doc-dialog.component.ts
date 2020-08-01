import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-doc-dialog',
  templateUrl: './add-doc-dialog.component.html',
  styleUrls: ['./add-doc-dialog.component.scss']
})
export class AddDocDialogComponent implements OnInit {
  public dateTime2: Date;

  constructor(public dialogRef: MatDialogRef<AddDocDialogComponent>, @Inject(MAT_DIALOG_DATA) public diary: any) { }

  severityLevel = ["High", "Medium", "Low"];

  categories = ["Quality Systems", "Production Systems", "Laboratory System", "Facility & Equipment Systems", "Material Management Systems", "Packaging & Labelling Systems"];

  subcategories = ["Quality Oversight", "Laboratory Testing & Data Management", "Documentation Controls", "Controls Over Computerised Systems", "Investigation", "Validation (Process/ Cleaning/ Methods)"];


  assignedtos = ["Dipen","Rami Reddy","Srinivasa","Navin"];

  statuss = ["Assigned","Resolved"];
  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
