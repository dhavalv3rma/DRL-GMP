import { Component, OnInit } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MatDialog } from '@angular/material';
import { CallsDialogComponent } from './calls-dialog/calls-dialog.component';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {
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
        class: 'mgl-timeline-entry-dot-calls',
        date:'Thu, 08 Nov 2018 19:14',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'messageClass',
        header: 'Jennie',
        content: 'Client has a requirement for ERP system'
      },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'emailClass',
        header: 'You',
        content: 'Probable time for next contact should be by 1st November'
      },
      // {
      //   class: 'mgl-timeline-entry-dot-calls',
      //   header: 'Received from Jennie',
      //   content: 'Got Yesterday'
      // },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Thu, 22 Nov 2018 13:28',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'messageClass',
        header: 'Heath',
        content: 'The next round of funding available by the client is post January 2019'
      },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Sat, 24 Nov 2018 10:14',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'messageClass',
        header: 'You',
        content: 'Client has a requirement for ERP system'
      },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Tue, 27 Nov 2018 21:19',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'emailClass',
        header: 'Heath',
        content: 'Probable time for next contact should be by 1st November'
      },
      // {
      //   class: 'mgl-timeline-entry-dot-calls',
      //   header: 'Received from Jennie',
      //   content: 'Got Yesterday'
      // },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Thu, 29 Nov 2018 15:30',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'messageClass',
        header: 'You',
        content: 'The next round of funding available by the client is post January 2019'
      },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Fri, 30 Nov 2018 23:14',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'messageClass',
        header: 'Jennie',
        content: 'Client has a requirement for ERP system'
      },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Sun, 02 Nov 2018 06:25',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'emailClass',
        header: 'You',
        content: 'Probable time for next contact should be by 1st November'
      },
      {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Mon, 03 Nov 2018 09:52',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
        headerClass: 'emailClass',
        header: 'Heath',
        content: 'Client has a requirement for ERP system'
      },
      /* {
        class: 'mgl-timeline-entry-dot-calls',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-phone',
        dataelement:'fa fa-microphone',
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
      let dialogRef = this.dialog.open(CallsDialogComponent, {
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
