import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddLeadSourceDialogComponent } from './add-lead-source-dialog/add-lead-source-dialog.component';

@Component({
  selector: 'app-lead-sources',
  templateUrl: './lead-sources.component.html',
  styleUrls: ['./lead-sources.component.scss']
})
export class LeadSourcesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddLeadSourceDialog() {
    let dialogRef = this.dialog.open(AddLeadSourceDialogComponent, {
        height: 'auto',
        width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}

  ngOnInit() {
  }
  LeadSourceData =[
    {leadSource:'Website', status:'Active'},
    {leadSource:'Social Media (Facebook, Twitter etc)', status:'Active'},
    {leadSource:'Referral (Friend, Family, Etc)', status:'Active'},
    {leadSource:'Google', status:'Active'},
    {leadSource:'Previously a Client', status:'Active'},
  ]
}
