import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MglTimelineModule } from 'angular-mgl-timeline';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
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
  locationOptions = ["Sites","Tasks","Actions","Assets","Expenses"];
locationOptionSelected: any;
startDate = new Date(1990, 0, 1);
onLocationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
  entries = [
    {
      class: 'mgl-timeline-entry-dot-linkedin',
      date:'Mon, 15 May 2019 08:54',
      element:'',
      headerClass: 'notesClass',
      header: 'Site',
      content: 'New site "MISS20191001" added by: "John"'
    },
    {
      class: 'mgl-timeline-entry-dot-email',
      date:'Tue, 10 May 2019 21:19',
      element:'',
      //dataelement:'fa fa-envelope-open-o',
      headerClass: 'notesClass',
      header: 'Task',
      content: 'New task "Field Preparation" has been added to site "MISS201910001" by "David"'
    },
    {
      class: 'mgl-timeline-entry-dot-calls',
      date:'Thu, 08 May 2019 19:14',
      element:'',
      dataelement:'',
      headerClass: 'notesClass',
      header: 'Action',
      content: 'New action "Field Drawing" has be added under site "MISS201910001'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date:'Wed, 21 April 2019 14:10',
      element:'',
      dataelement:'',
      headerClass: 'notesClass',
      header: 'Site',
      content: 'New site "MISS20191001" added by: "Henry"'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date:'Thu, 08 May 2019 19:14',
      element:'',
      dataelement:'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Task',
      content: 'New task "Field Preparation" has been added to site "MISS201910001" by "Walker"'
    },
    // {
    //   class: 'mgl-timeline-entry-dot-email',
    //   date:'Tue, 13 Nov 2018 21:19',
    //   element:'fa fa-envelope',
    //  // dataelement:'fa fa-envelope-open-o',
    //   headerClass: 'emailClass',
    //   header: 'Email',
    //   content: 'Hello Navin,I just saw your email and interested in meeting you this weekent to discuss about my requirement'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-notes',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-sticky-note',
    //   dataelement:'fa fa-sticky-note-o',
    //   headerClass: 'notesClass',
    //   header: 'Notes',
    //   content: 'New parallel project awarded by Red Leaf Stone'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-linkedin',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-linkedin',
    //   //dataelement:'fa fa-comment',
    //   headerClass: 'linkedinClass',
    //   header: 'Linkedin message',
    //   content: 'Hello Navin, I am pleased to award you a project for my business development in Sales.Looking forward to meet you for further discussions.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-event',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-toggle-right',
    //   dataelement:'fa fa-flag-o',
    //   headerClass: 'eventClass',
    //   header: 'Event',
    //   content: 'BGR is moved form Conversations to Archive.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-notes',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-sticky-note',
    //   dataelement:'fa fa-sticky-note-o',
    //   headerClass: 'notesClass',
    //   header: 'Notes',
    //   content: 'Meeting scheduled on 15th Dec to meet a client in Vancouver at 3:30P.M.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-message',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-comments',
    //   dataelement:'fa fa-comment',
    //   headerClass: 'messageClass',
    //   header: 'Heath',
    //   content: 'I am very much satisfied with the commitment with which you work for my project.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-linkedin',
    //   date:'Mon, 5 Nov 2018 08:54',
    //   element:'fa fa-linkedin',
    //   headerClass: 'linkedinClass',
    //   header: 'Linkedin Invitation',
    //   content: 'Hello *****, I am keen to meet you in person about your product / custom software development outsourcing?  I am located in Vancouver with business in 9 countries and offshore development in India. Please accept my invite.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-email',
    //   date:'Tue, 13 Nov 2018 21:19',
    //   element:'fa fa-envelope',
    //   //dataelement:'fa fa-envelope-open-o',
    //   headerClass: 'emailClass',
    //   header: 'Email',
    //   content: 'Hello ****,I would like to explore possibilities of serving your needs for software product/project development outsourcing. My whole idea is that you don’t start custom from scratch and we just modify what we have to give you exactly what you need. So it is custom but at lower cost and it is quick.Does any time this week suit you for an in-person meeting?'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-calls',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-phone',
    //   dataelement:'fa fa-microphone',
    //   headerClass: 'callsClass',
    //   header: 'Jennie',
    //   content: 'Client has a requirement for ERP system'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-event',
    //   date:'Wed, 21 Nov 2018 14:10',
    //   element:'fa fa-toggle-right',
    //   dataelement:'fa fa-flag-o',
    //   headerClass: 'eventClass',
    //   header: 'Event',
    //   content: 'Blue Stone India is moved from Qualification to Potential'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-notes',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-sticky-note',
    //   dataelement:'fa fa-sticky-note-o',
    //   headerClass: 'notesClass',
    //   header: 'Notes',
    //   content: 'The Operations head of Axess is changed from Mr.Robert to Mr.Jesper '
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-email',
    //   date:'Tue, 13 Nov 2018 21:19',
    //   element:'fa fa-envelope',
    //   //dataelement:'fa fa-envelope-open-o',
    //   headerClass: 'emailClass',
    //   header: 'Email',
    //   content: 'Hello Navin,I just saw your email and interested in meeting you this weekent to discuss about my requirement'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-notes',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-sticky-note',
    //   dataelement:'fa fa-sticky-note-o',
    //   headerClass: 'notesClass',
    //   header: 'Notes',
    //   content: 'New parallel project awarded by Red Leaf Stone'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-linkedin',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-linkedin',
    //   //dataelement:'fa fa-comment',
    //   headerClass: 'linkedinClass',
    //   header: 'Linkedin message',
    //   content: 'Hello Navin, I am pleased to award you a project for my business development in Sales.Looking forward to meet you for further discussions.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-event',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-toggle-right',
    //   dataelement:'fa fa-flag-o',
    //   headerClass: 'eventClass',
    //   header: 'Event',
    //   content: 'BGR is moved form Conversations to Archive.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-notes',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-sticky-note-o',
    //   dataelement:'fa fa-sticky-note-o',
    //   headerClass: 'notesClass',
    //   header: 'Notes',
    //   content: 'Meeting scheduled on 15th Dec to meet a client in Vancouver at 3:30P.M.'
    // },
    // {
    //   class: 'mgl-timeline-entry-dot-message',
    //   date:'Thu, 08 Nov 2018 19:14',
    //   element:'fa fa-comments',
    //   dataelement:'fa fa-comment',
    //   headerClass: 'messageClass',
    //   header: 'Heath',
    //   content: 'I am very much satisfied with the commitment with which you work for my project.'
    // },
    
    // {
    //   class: 'mgl-timeline-entry-dot-calls',
    //   header: 'Received from Jennie',
    //   content: 'Got Yesterday'
    // },
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
  constructor(private location:Location,public MglTimelineModule: MglTimelineModule) { }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
}