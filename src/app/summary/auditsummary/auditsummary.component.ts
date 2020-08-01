import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-auditsummary',
  templateUrl: './auditsummary.component.html',
  styleUrls: ['./auditsummary.component.scss']
})
export class AuditsummaryComponent implements OnInit {

  filterToggle: boolean;
  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }
  summary =[
    {unit1:'CTO-1' , q1:'Completed' , q2:'NA', q3:'Not Completed', q4:'Completed', unit2:'FTO-1',  q21:'NA' , q22:'NA', q23:'Completed', q24:'Completed',},
    {unit1:'CTO-2' , q1:'NA' , q2:'Completed', q3:'Not Completed', q4:'NA', unit2:'FTO-2',  q21:'NA' , q22:'NA', q23:'Completed', q24:'Completed',},
    {unit1:'CTO-3' , q1:'Completed' , q2:'NA', q3:'Completed', q4:'NA', unit2:'FTO-3',  q21:'NA' , q22:'Completed', q23:'Not Completed', q24:'NA',},
    {unit1:'CTO-4' , q1:'Not Completed' , q2:'Completed', q3:'Not Completed', q4:'Completed', unit2:'FTO-4',  q21:'NA' , q22:'NA', q23:'Completed', q24:'Completed',},
    {unit1:'CTO-2' , q1:'NA' , q2:'Completed', q3:'Not Completed', q4:'Completed', unit2:'FTO-2',  q21:'NA' , q22:'NA', q23:'Completed', q24:'Completed',},
    {unit1:'CTO-2' , q1:'Completed' , q2:'NA', q3:'Not Completed', q4:'NA', unit2:'FTO-2',  q21:'Completed' , q22:'NA', q23:'Completed', q24:'NA',},
    {unit1:'CTO-1' , q1:'Completed' , q2:'Completed', q3:'Not Completed', q4:'NA', unit2:'FTO-1',  q21:'NA' , q22:'NA', q23:'Completed', q24:'Completed',},

  ]

  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
