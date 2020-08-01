import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddSectionDialogComponent } from './add-section-dialog/add-section-dialog.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  MunicipalitiesList =[
    {municipality:'Data Integrity', status:'Active'},
    {municipality:'Equipment Cleaning', status:'Active'},
    {municipality:'Equipment Maintenance', status:'Active'},
    {municipality:'Computer System Controls', status:'Active'},
    {municipality:'Document Control', status:'Active'},
  ]

  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(AddSectionDialogComponent, {
        height: 'auto',
        width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}

}
