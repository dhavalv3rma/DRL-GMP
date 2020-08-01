import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddClientTypeDialogComponent } from './add-client-type-dialog/add-client-type-dialog.component';

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss']
})
export class ClientTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public AddClientTypeDialog() {
    let dialogRef = this.dialog.open(AddClientTypeDialogComponent, {
        height: 'auto',
        width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}

ClientTypeData =[
  {clienttype:'Engineer/Engineering Firm', status:true},
  {clienttype:'Private land owner', status:true},
  {clienttype:'Planner', status:true},
  {clienttype:'Business', status:true},
  {clienttype:'Architect/Architect firm', status:false},
  {clienttype:'Government', status:true},
  {clienttype:'Home builder', status:true},
  {clienttype:'Law firm', status:true},
  {clienttype:'Realtor', status:false},
  {clienttype:'Utility company', status:true},
  {clienttype:'Surveyor/Survey firm', status:true},
  {clienttype:'Developer', status:true},
]




}
