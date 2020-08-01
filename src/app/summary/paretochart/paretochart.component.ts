import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-paretochart',
  templateUrl: './paretochart.component.html',
  styleUrls: ['./paretochart.component.scss']
})
export class ParetochartComponent implements OnInit {
  filterToggle: boolean;
  constructor(public dialog: MatDialog, private alertService: AlertService) { }


  ngOnInit() {
  }
  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
