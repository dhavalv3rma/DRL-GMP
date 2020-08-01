import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddDepartsDialogComponent } from './add-departs-dialog/add-departs-dialog.component';

@Component({
  selector: 'app-departs',
  templateUrl: './departs.component.html',
  styleUrls: ['./departs.component.scss']
})
export class DepartsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(AddDepartsDialogComponent, {
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
  MunicipalitiesList =[
    {municipality:'Data Integrity', status:'Active'},
    {municipality:'Equipment Cleaning', status:'Active'},
    {municipality:'Equipment Maintenance', status:'Active'},
    {municipality:'Computer System Controls', status:'Active'},
    {municipality:'Document Control', status:'Active'},
  ]

}
