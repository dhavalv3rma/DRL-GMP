import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDiaryDialogComponent } from './add-diary-dialog/add-diary-dialog.component';

@Component({
  selector: 'app-auditor-remarks',
  templateUrl: './auditor-remarks.component.html',
  styleUrls: ['./auditor-remarks.component.scss']
})
export class AuditorRemarksComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog : MatDialog) { }

  filterToggle: boolean;

  public openDiaryDialog(id) {
    let dialogRef = this.dialog.open(AddDiaryDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  ngOnInit() {
  }

  tableList = [
    {date: '06/02/2019', agenda: 'Schedule', notes: 'The scheduled audit is delayed by 2 days'},
    {date: '20/02/2019', agenda: 'Information Request', notes: 'Leakage of water observed from utilities pipe-021'},
    {date: '22/02/2019', agenda: 'Assessment Standards', notes: 'Department wise quality standards are not maintained'},
    {date: '26/02/2019', agenda: 'Property Itinerary', notes: 'Damaged property request is placed but not found any defect in the equipment'},
    {date: '09/03/2019', agenda: 'Reporting', notes: 'The reporting officer of the unit is absent during audit period'},
  ];

  deleteObservation() {
    //this.alertService.createAlert('Successfully deleted.', 1);
    this.dialog.closeAll(); 
  }

}
