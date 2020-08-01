import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCapaDialogComponent } from './add-capa-dialog/add-capa-dialog.component';
import { AssignCapaComponent } from './assign-capa/assign-capa.component';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog : MatDialog) { }

  public openDiaryDialog(id) {
    let dialogRef = this.dialog.open(AddCapaDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public openDiaryDialog1(id) {
    let dialogRef = this.dialog.open(AssignCapaComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  ngOnInit() { }
  selected = 'logged';

  status =["Logged","Initiated","Processed","Near Final","Done","Overdue"]

  tableList = [
    {actionItem:'Differential pressure of media sterilization', date: '06/02/2019', agenda: 'Schedule', notes: 'The scheduled audit is delayed by 2 days', roleOwner: 'Sharath', status:'Logged'},
    {actionItem:'Compressed air leakage in sterilization area', date: '20/02/2019', agenda: 'Information Request', notes: 'Leakage of water observed from utilities pipe-021', roleOwner: 'Rahul', status:"Initiated"},
    {actionItem:'Sterile disinfectants were found in grade A and grade B areas', date: '22/02/2019', agenda: 'Assessment Standards', notes: 'Department wise quality standards are not maintained', roleOwner: 'Sriram', status:"Processed"},
    {actionItem:'Microbial testing method of nitrogen gas was not validated', date: '26/02/2019', agenda: 'Property Itinerary', notes: 'Damaged property request is placed but not found any defect in the equipment', roleOwner: 'Navin', status:"Done"},
    {actionItem:'Keterol BET validation report was not traceable', date: '09/03/2019', agenda: 'Reporting', notes: 'The reporting officer of the unit is absent during audit period', roleOwner: 'Pranab', status:"Overdue"},
  ];

  deleteObservation() {
    //this.alertService.createAlert('Successfully deleted.', 1);
    this.dialog.closeAll(); 
  }

}
