import { Component, OnInit } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MessagesDialogComponent } from './messages-dialog/messages-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
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
        class: 'mgl-timeline-entry-dot-message',
        date:'Mon, 15 Oct 2018 10:19',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'Jennie',
        content: 'I have a requirement for ERP system'
      },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Tue, 16 Oct 2018 01:10',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'You',
        content: 'I have informed the development team and we shall have a discussion very shortly'
      },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Thu, 08 Nov 2018 19:14',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'Jennie',
        content: 'I am really thankful for your team work and very much satisfied'
      },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'You',
        content: 'Probable time for next contact should be by 1st November'
      },
      // {
      //   class: 'mgl-timeline-entry-dot-calls',
      //   header: 'Received from Jennie',
      //   content: 'Got Yesterday'
      // },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Thu, 22 Nov 2018 13:28',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'Heath',
        content: 'The further development of project available is post January 2019'
      },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Thu, 22 Nov 2018 15:52',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'You',
        content: 'Thank you Heath.Will be waiting for your message'
      },
      /* {
        class: 'mgl-timeline-entry-dot-message',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'emailClass',
        header: 'You',
        content: 'Probable time for next contact should be by 1st November'
      }, */
    ]
  
    addEntry() {
      this.entries.push({
        header: 'header',
        date:'date',
        element:'element',
        dataelement:'dataelement',
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
      let dialogRef = this.dialog.open(MessagesDialogComponent, {
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
