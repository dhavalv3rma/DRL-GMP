import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.scss']
})
export class DrilldownComponent implements OnInit {

  filterToggle: boolean;
  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }
  summary =[
    {app:'137', inad:'111', quality:'44', qms:'12', train:'6', regulat:'2',area:'88', break:'28', calib:'25', facility:'20', qualification:'16' },
    
  ]
  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
