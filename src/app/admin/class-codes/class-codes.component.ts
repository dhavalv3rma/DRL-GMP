import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { ClassCodeDialogComponent } from './class-codes-dialog/class-codes-dialog.component';

@Component({
  selector: 'app-class-codes',
  templateUrl: './class-codes.component.html',
  styleUrls: ['./class-codes.component.scss']
})
export class ClassCodesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(ClassCodeDialogComponent, {
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
    {municipality:'Critical (High risk)', status:true},
    {municipality:'Major (Moderate risk)', status:true},
    {municipality:'Minor (Low risk)', status:true},
  ]
}
