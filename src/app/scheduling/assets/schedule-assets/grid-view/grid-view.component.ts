import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../../node_modules/@angular/material';
import { AddAssetReturnDateDialogComponent } from './add-asset-return-date-dialog/add-asset-return-date-dialog.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  filterToggle: boolean = false
  constructor(public dialog:MatDialog) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  data=[
    {returnedDate:'-',isReturned:false,status:true,title:'Cosmolabe is assigned to George Smith.',partyCheif:'George Smith',fieldAssistantsCount:2,fieldAssistantsList:'Tom Kin, Fernando Jack',assetsScheduledCount:5,assetsList:'Cosmolabe',fromDate:'2019-06-10',toDate:'2019-06-12'},
    {returnedDate:'-',isReturned:false,status:false,title:'Graphometer is assigned to Maxwell Martin.',partyCheif:'Maxwell Martin',fieldAssistantsCount:1,fieldAssistantsList:'James Smith',assetsScheduledCount:4,assetsList:'Graphometer',fromDate:'2019-06-9',toDate:'2019-06-12'},
    {returnedDate:'-',isReturned:false,status:true,title:'Total station is assigned to Thomas Brown.',partyCheif:'Thomas Brown',fieldAssistantsCount:2,fieldAssistantsList:'Michael Smith, Maria Garcia',assetsScheduledCount:5,assetsList:'Total station',fromDate:'2019-06-9',toDate:'2019-06-13'},
    {returnedDate:'2019-06-11',isReturned:true,status:true,title:'Tachymeter is assigned to William Tremblay.',partyCheif:'William Tremblay',fieldAssistantsCount:2,fieldAssistantsList:'David Smith, Maria Rodriguez',assetsScheduledCount:4,assetsList:'Tachymeter',fromDate:'2019-06-11',toDate:'-'}
  ]
  ngOnInit() {
  }
  public OpenReturnDateDialog() {
    let dialogRef = this.dialog.open(AddAssetReturnDateDialogComponent, {
        height: 'auto',
        width: '500px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}
}
