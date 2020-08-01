import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddObservationDialogComponent } from './add-observation-dialog/add-observation-dialog.component';
import { AddEmailDialogComponent } from '../audit-closed/add-email-dialog/add-email-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auditee-response',
  templateUrl: './auditee-response.component.html',
  styleUrls: ['./auditee-response.component.scss']
})
export class AuditeeResponseComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  isGridView: boolean = true;
  constructor(public dialog: MatDialog, public router: Router) { }

  public openObservationDialog(id) {
    let dialogRef = this.dialog.open(AddObservationDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  ngOnInit() {
    this.router.navigate(['/OM/sales/auditdashboard/observations/critical']);
  }

  // tableList = [
  //   {actionItem:'Differential pressure of media sterilization', date: '06/02/2019', agenda: 'Schedule', notes: 'The scheduled audit is delayed by 2 days', roleOwner: 'Sharath', status:true},
  //   {actionItem:'Compressed air leakage in sterilization area', date: '20/02/2019', agenda: 'Information Request', notes: 'Leakage of water observed from utilities pipe-021', roleOwner: 'Rahul', status:true},
  //   {actionItem:'Sterile disinfectants were found in grade A and grade B areas', date: '22/02/2019', agenda: 'Assessment Standards', notes: 'Department wise quality standards are not maintained', roleOwner: 'Sriram', status:true},
  //   {actionItem:'Microbial testing method of nitrogen gas was not validated', date: '26/02/2019', agenda: 'Property Itinerary', notes: 'Damaged property request is placed but not found any defect in the equipment', roleOwner: 'Navin', status:true},
  //   {actionItem:'Keterol BET validation report was not traceable', date: '09/03/2019', agenda: 'Reporting', notes: 'The reporting officer of the unit is absent during audit period', roleOwner: 'Pranab', status:true},
  // ];

  tableList = [
    { severityLevel: "High", remarks: "Differential pressure of media sterilization", category: "Quality Systems", subCategory: "Quality Oversight", status: false },
    { severityLevel: "Low", remarks: "Compressed air leakage in sterilization area", category: "Laboratory Systems", subCategory: "Investigation", status: true },
    { severityLevel: "Low", remarks: "Sterile disinfectants were found in grade A and grade B areas", category: "Production Systems", subCategory: "Documentation Controls", status: true },
    { severityLevel: "Medium", remarks: "Microbial testing method of nitrogen gas was not validated", category: "Facility & Equipment Systems", subCategory: "Data Integrity", status: false },
    { severityLevel: "Medium", remarks: "Keterol BET validation report was not traceable", category: "Packaging & Labelling Systems", subCategory: "Aseptic Manufacturing Practices", status: false },
    //{severityLevel:"Low",remarks:""}
  ];

  deleteObservation() {
    //this.alertService.createAlert('Successfully deleted.', 1);
    this.dialog.closeAll();
  }

  public openEmailDialog(id) {
    let dialogRef = this.dialog.open(AddEmailDialogComponent, {
      data: id,
      height: 'auto',
      width: '500px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
