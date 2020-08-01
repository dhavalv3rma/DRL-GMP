import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { GenreportEmailDialogComponent } from './genreport-email-dialog/genreport-email-dialog.component';

@Component({
  selector: 'app-genreport2',
  templateUrl: './genreport2.component.html',
  styleUrls: ['./genreport2.component.scss']
})
export class Genreport2Component implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }
  practice =[
    {title:'Audit Plan vs Completed', section:'Audit Summary', fto:'Yes', cto:'NA', bio:'Yes', dev:'Yes', year1:'2020', year2:'NA'},
    {title:'Categorisation of Internal Audit Observations - 2020 vs 2019', section:'Categorisation', fto:'No', cto:'Yes', bio:'NA', dev:'NA', year1:'2018', year2:'2019'},
    {title:'High vs Risk Observations - 2020 vs 2019', section:'Observation',  fto:'NA', cto:'No', bio:'Yes', dev:'No', year1:'2018', year2:'2020'},
    {title:'Top Five categories - FTO', section:'Top Five', fto:'Yes', cto:'No', bio:'Yes', dev:'Yes', year1:'2019', year2:'2020'},
    {title:'Top Five categories - CTO', section:'Top Five', fto:'No', cto:'Yes', bio:'NA', dev:'NA', year1:'2019', year2:'2020'},
    {title:'Analysis - FTO', section:'Pareto Analysis', fto:'No', cto:'Yes', bio:'Yes', dev:'Yes', year1:'2019', year2:'2020'},
    {title:'Analysis - CTO', section:'Pareto Analysis', fto:'No', cto:'Yes', bio:'NA', dev:'NA', year1:'2019', year2:'2020'},
    {title:'Feedback of Auditee Response', section:'Auditee Response', fto:'Yes', cto:'NA', bio:'Yes', dev:'Na', year1:'2019', year2:'2020'},
    {title:'Feedback of Capa Clearance', section:'CAPA Clearance', fto:'Yes', cto:'NA', bio:'No', dev:'Yes', year1:'2019', year2:'2020'},
    {title:'Improvements', section:'Improvements', fto:'NA', cto:'Yes', bio:'Yes', dev:'No', year1:'2019', year2:'2020'},
  ]
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.practice, event.previousIndex, event.currentIndex);
  }

  public openEmailDialog(id) {
    let dialogRef = this.dialog.open(GenreportEmailDialogComponent, {
      data: id,
      height: 'auto',
      width: '500px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
}
