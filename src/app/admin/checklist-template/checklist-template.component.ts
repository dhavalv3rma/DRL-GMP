import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddChecklistTemplateComponent } from './add-checklist-template/add-checklist-template.component';

@Component({
  selector: 'app-checklist-template',
  templateUrl: './checklist-template.component.html',
  styleUrls: ['./checklist-template.component.scss']
})
export class ChecklistTemplateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(AddChecklistTemplateComponent, {
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
    {municipality:'Building & Infra', status:true},
    {municipality:'Drainage', status:true},
    {municipality:'Default Checklist', status:true},
    {municipality:'Pipe work', status:true},
    {municipality:'Utilities-CT', status:true},
    {municipality:'Maintenance System', status:true}
  ]

}
