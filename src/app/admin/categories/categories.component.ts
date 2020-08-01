import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(AddCategoryDialogComponent, {
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
    {municipality:'Quality Systems', status:true},
    {municipality:'Production Systems', status:true},
    {municipality:'Laboratory Systems', status:true},
    {municipality:'Facility & Equipment Systems', status:true},
    {municipality:'Material Management Systems', status:true},
    {municipality:'Packaging & Labelling Systems', status:true}
  ]

}
