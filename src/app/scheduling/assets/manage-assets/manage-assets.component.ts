import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material';
import { AddAssetDialogComponent } from '../add-asset-dialog/add-asset-dialog.component';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.scss']
})
export class ManageAssetsComponent implements OnInit {

  filterToggle : boolean = false
  constructor(public dialog:MatDialog) { }

  status1: boolean=true;
  status2: boolean=true;
  status3: boolean=true;
  openAddAssetDialog(event){
    let dialogRef = this.dialog.open(AddAssetDialogComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(!result.isEdit){
         
        }else{
          //implement edit here
        }
      }
    });
  }

  popoverTitle='Are you sure?';
  popoverMessage='This action cannot be undone';

  ngOnInit() {
  }

}
