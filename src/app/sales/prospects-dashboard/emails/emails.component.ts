import { Component, OnInit } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  communicationOptions = ["Incoming","Outgoing"];
communicationOptionSelected: any;
//startDate = new Date(1990, 0, 1);
onCommunicationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
  public dateTime1: Date;
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;

  entries = [
    {
      class: 'mgl-timeline-entry-dot-email',
      date:'Mon, 5 Nov 2018 08:54',
      element:'fa fa-envelope',
      headerClass: 'emailClass',
      header: 'Email',
      content: 'Hello *****, I am keen to meet you in person about your product / custom software development outsourcing?  I am located in Vancouver with business in 9 countries and offshore development in India. Please accept my invite.'
    },
    {
      class: 'mgl-timeline-entry-dot-email',
      date:'Tue, 13 Nov 2018 21:19',
      element:'fa fa-envelope',
      headerClass: 'emailClass',
      header: 'Email',
      content: 'Hello ****,I would like to explore possibilities of serving your needs for software product/project development outsourcing. My whole idea is that you don’t start custom from scratch and we just modify what we have to give you exactly what you need. So it is custom but at lower cost and it is quick.Does any time this week suit you for an in-person meeting?'
    },
    // {
    //   class: 'mgl-timeline-entry-dot-calls',
    //   header: 'Received from Jennie',
    //   content: 'Got Yesterday'
    // },
    {
      class: 'mgl-timeline-entry-dot-email',
      date:'Thu, 22 Nov 2018 13:28',
      element:'fa fa-envelope',
      headerClass: 'emailClass',
      header: 'Email',
      content: 'Hello Adam, I am interested to have a discussion with you on phone or in person as per your preference.  I would like to tell you about my business and ask you a few questions to explore opportunities.  Navin 604 841 9095'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      date:'date',
      element:'element',
      headerClass: '',
      content: 'content',
      class: '',
      
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }


  public openEditDialog(text) {
    let dialogRef = this.dialog.open(EmailDialogComponent, {
        data: text,
        height: 'auto',
        width: '600px',
    });

    dialogRef.afterClosed().subscribe(prospects => {
        if (prospects) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}


  constructor(public MglTimelineModule: MglTimelineModule,public dialog: MatDialog) { }

  ngOnInit() {
  }

}
