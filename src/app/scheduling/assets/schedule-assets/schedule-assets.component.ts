import { Component, OnInit } from '@angular/core';
import { AssetsScheduleDialogComponent } from './assets-schedule-dialog/assets-schedule-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-schedule-assets',
  templateUrl: './schedule-assets.component.html',
  styleUrls: ['./schedule-assets.component.scss']
})
export class ScheduleAssetsComponent implements OnInit {
  filterToggle:boolean=false;
  constructor(public dialog: MatDialog ) { }
  openScheduleDialog(event){
    let dialogRef = this.dialog.open(AssetsScheduleDialogComponent, {
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
  ngOnInit() {
  }

}
