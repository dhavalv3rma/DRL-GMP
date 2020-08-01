import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddSubCategoryDialogComponent } from './add-sub-category-dialog/add-sub-category-dialog.component';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
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
    {municipality:'Quality Systems',subCategory:'Quality Oversight', status:true},
    {municipality:'Production Systems',subCategory:'Laboratory Testing & Data Management', status:true},
    {municipality:'Laboratory Systems',subCategory:'Facility & Equipment Controls', status:true},
    {municipality:'Laboratory Systems',subCategory:'Documentation Controls', status:true},
    {municipality:'Laboratory Systems',subCategory:'Controls Over Computerised Systems', status:true},
    {municipality:'Laboratory Systems',subCategory:'Investigation', status:true},
    {municipality:'Facility & Equipment Systems',subCategory:'Validation (Process/ Cleaning/ Methods)', status:true},
    {municipality:'Material Management Systems',subCategory:'Material Management & Label Controls', status:true},
    {municipality:'Packaging & Labelling Systems',subCategory:'Environmental Monitoring & Microbial Testing', status:true}
  ]


}
