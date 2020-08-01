import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddSurveyTypeModalComponent } from './add-survey-type-modal/add-survey-type-modal.component';

@Component({
  selector: 'app-survey-type',
  templateUrl: './survey-type.component.html',
  styleUrls: ['./survey-type.component.scss']
})
export class SurveyTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  OpenAddSurveyTypeModal(){
    let dialogRef = this.dialog.open(AddSurveyTypeModalComponent, {
      height: 'auto',
      width: '600px',
  });
  dialogRef.afterClosed().subscribe(oppurtunity => {
      if (oppurtunity) {
          // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
      }
  });
}

  SurveyTypeData =[
    {surveytype:'Land surveying', status:true},
    {surveytype:'Engineering surveying', status:true},
    {surveytype:'Hydrographic surveying', status:true},
    {surveytype:'Mining surveying', status:true},
    {surveytype:'Geodetic surveying', status:true},
    {surveytype:'Photogrammetry and remote sensing', status:false},
  ]
}
