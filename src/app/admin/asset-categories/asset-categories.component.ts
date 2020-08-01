import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddAssetCategoryDialogComponent } from './add-asset-category-dialog/add-asset-category-dialog.component';

@Component({
  selector: 'app-asset-categories',
  templateUrl: './asset-categories.component.html',
  styleUrls: ['./asset-categories.component.scss']
})
export class AssetCategoriesComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public AddAssetCategoryDialog() {
    let dialogRef = this.dialog.open(AddAssetCategoryDialogComponent, {
        height: 'auto',
        width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}

AssetCategoryData =[
  {assetCategory:'Vehicles', status:true},
  {assetCategory:'Furniture', status:true},
  {assetCategory:'Inventory', status:false},
]




}