import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MglTimelineModule } from 'angular-mgl-timeline';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;
  public dateTime1: Date;
  public filterToggle : boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  locationOptions = ["Email","Call","Text Messages","Updates","Linkedin"];
locationOptionSelected: any;
startDate = new Date(1990, 0, 1);
onLocationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
  entries = [
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Audit team meeting is Scheduled'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Audit on GQM-Internal is started '
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Division manages is on leave at the time of audit '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Audit on CTO - 1 is initiated'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Sterile disinfectants were found in grade A and grade B areas '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Initial Audit Report is generated'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Microbial testing method of nitrogen gas was not validated'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Compressed air leakage in sterilization area'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Differential pressure of media sterilization.'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Meeting scheduled on 15th Dec to meet a client in Vancouver at 3:30P.M.'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Auditor is waiting for the auditee response'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Auditee responded to the auditor repost with a delay of 2 months '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Auditor is waiting for the revised auditee response'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Differential pressure of media sterilization '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Compressed air leakage in sterilization area'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Sterile disinfectants were found in grade A and grade B areas '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Microbial testing method of nitrogen gas was not validated'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Keterol BET validation report was not traceable'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Differential pressure of media sterilization'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Audit on CTO - 1 is initiated.'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-sticky-note-o',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Auditee responded to the auditor repost with a delay of 2 months '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 Nov 2018 14:10',
      element:'fa fa-toggle-right',
      dataelement:'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Differential pressure of media sterilization'
    },
    
    // {
    //   class: 'mgl-timeline-entry-dot-calls',
    //   header: 'Received from Jennie',
    //   content: 'Got Yesterday'
    // },
  ]
  // addEntry() {
  //   this.entries.push({
  //     header: 'header',
  //     date:'date',
  //     element:'element',
  //     headerClass: '',
  //     content: 'content',
  //     class: '',
  //   })
  // }
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
  constructor(private location:Location,public MglTimelineModule: MglTimelineModule) { }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

}
