import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

 
  filterToggle: boolean;
  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }
  summary =[
    {unit:'CTO-1', high:'1', moderate:'2', high1:'0', moderate1:'2', cycle:'1', cycle1:'1', cycle2:'0', cycle3:'1'},
    {unit:'CTO-2', high:'0', moderate:'1', high1:'1', moderate1:'0', cycle:'0', cycle1:'1', cycle2:'1', cycle3:'1'},
    {unit:'Mexico', high:'NA', moderate:'2', high1:'0', moderate1:'1', cycle:'1', cycle1:'0', cycle2:'1', cycle3:'1'},
    {unit:'CTO-3', high:'1', moderate:'0', high1:'2', moderate1:'0', cycle:'2', cycle1:'0', cycle2:'0', cycle3:'1'},
    {unit:'CTO-Sez', high:'1', moderate:'1', high1:'1', moderate1:'2', cycle:'0', cycle1:'1', cycle2:'0', cycle3:'1'},
  ]

  
  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
