import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-auditresponse',
  templateUrl: './auditresponse.component.html',
  styleUrls: ['./auditresponse.component.scss']
})
export class AuditresponseComponent implements OnInit {

  filterToggle: boolean;
  constructor(public dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
  }
  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
