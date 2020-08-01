import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddAgendaTemplateComponent } from './add-agenda-template/add-agenda-template.component';

@Component({
  selector: 'app-agenda-template',
  templateUrl: './agenda-template.component.html',
  styleUrls: ['./agenda-template.component.scss']
})
export class AgendaTemplateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddMunicipalityDialog() {
    let dialogRef = this.dialog.open(AddAgendaTemplateComponent, {
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
    {municipality:'Objective', status:true},
    {municipality:'Scope', status:true},
    {municipality:'Schedule', status:true},
    {municipality:'Information Request', status:true},
    {municipality:'Assessment Standards', status:true},
    {municipality:'Proposed Itinerary', status:true}
  ]

}
