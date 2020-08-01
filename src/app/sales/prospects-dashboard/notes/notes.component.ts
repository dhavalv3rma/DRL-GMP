import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MatDialog } from '@angular/material';
import { NotesDialogComponent } from './notes-dialog/notes-dialog.component';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  communicationOptions = ["Incoming","Outgoing"];
communicationOptionSelected: any;
//startDate = new Date(1990, 0, 1);
onCommunicationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
  public dateTime1: Date;
  public openEditDialog(text) {
    let dialogRef = this.dialog.open(NotesDialogComponent, {
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


  alternate: boolean = true;
    toggle: boolean = true;
    color: boolean = false;
    size: number = 40;
    expandEnabled: boolean = false;
    startDate: Date;
  
    entries = [
      {
        class: 'mgl-timeline-entry-dot-notes',
        date:'Thu, 08 Nov 2018 19:14',
        element:'fa fa-sticky-note',
        dataelement:'fa fa-sticky-note-o',
        headerClass: 'notesClass',
        header: 'Notes',
        content: 'Client has a requirement for ERP system'
      },
      {
        class: 'mgl-timeline-entry-dot-notes',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-sticky-note',
        dataelement:'fa fa-sticky-note-o',
        headerClass: 'notesClass',
        header: 'Notes',
        content: 'Probable time for next contact should be by 1st November'
      },
      // {
      //   class: 'mgl-timeline-entry-dot-calls',
      //   header: 'Received from Jennie',
      //   content: 'Got Yesterday'
      // },
      {
        class: 'mgl-timeline-entry-dot-notes',
        date:'Thu, 22 Nov 2018 13:28',
        element:'fa fa-sticky-note',
        dataelement:'fa fa-sticky-note-o',
        headerClass: 'notesClass',
        header: 'Notes',
        content: 'The next round of funding available by the client is post January 2019'
      },
      {
        class: 'mgl-timeline-entry-dot-notes',
        date:'Sat, 24 Nov 2018 22:21',
        element:'fa fa-sticky-note',
        dataelement:'fa fa-sticky-note-o',
        headerClass: 'notesClass',
        header: 'Notes',
        content: 'The operations head of Red Leaf Stone is changed from Mr.Robert to Mr.Stephen'
      },
      {
        class: 'mgl-timeline-entry-dot-notes',
        date:'Thu, 29 Nov 2018 4:15',
        element:'fa fa-sticky-note',
        dataelement:'fa fa-sticky-note-o',
        headerClass: 'notesClass',
        header: 'Notes',
        content: 'Jesper Mikkelson Have asked to speedup the work pace and the pulse is 70 currently'
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
  
  




  constructor(private location:Location,public MglTimelineModule: MglTimelineModule,public dialog: MatDialog) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
}
