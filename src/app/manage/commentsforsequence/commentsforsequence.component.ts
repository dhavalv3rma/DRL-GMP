import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { MglTimelineModule } from 'angular-mgl-timeline';


@Component({
    selector: 'app-commentsforsequence',
    templateUrl: './commentsforsequence.component.html',
    
})

export class CommentsforsequenceComponent implements OnInit {
  checkUrl :any;
    alternate: boolean = true;
    toggle: boolean = true;
    color: boolean = false;
    size: number = 40;
    expandEnabled: boolean = false;
  
    entries = [
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Thu, 08 Nov 2018 19:14',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'Heath',
        content: 'Client has a requirement for ERP system'
      },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
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
        class: 'mgl-timeline-entry-dot-message',
        date:'Thu, 22 Nov 2018 13:28',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'messageClass',
        header: 'Heath',
        content: 'The next round of funding available by the client is post January 2019'
      },
      {
        class: 'mgl-timeline-entry-dot-message',
        date:'Tue, 13 Nov 2018 21:19',
        element:'fa fa-comments',
        dataelement:'fa fa-comment',
        headerClass: 'emailClass',
        header: 'You',
        content: 'Probable time for next contact should be by 1st November'
      },
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
  
  
  
  
    startDate:any;
    ngOnInit() {
        
    }
    constructor(private location :Location,public MglTimelineModule: MglTimelineModule) {}


    goBack() {
        this.location.back();
      }
}