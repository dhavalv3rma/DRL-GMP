import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-fragile',
  templateUrl: './fragile.component.html',
  styleUrls: ['./fragile.component.scss']
})
export class FragileComponent implements OnInit {

  filterToggle: boolean;
  constructor(public dialog: MatDialog, public alertService: AlertService) { }


  ngOnInit() {}
  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
