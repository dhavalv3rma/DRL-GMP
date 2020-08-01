import { Component, OnInit } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts: object = [
    /* { alertID: 1, alertClass: 'alert-danger', alertType: 'danger', alertDescription: 'BGR Pvt Ltd contact made on 12th Nov 2018.' }, */
    { alertID: 2, alertClass: 'alert-danger', alertType: 'danger', alertDescription: 'Last contact for Blue Stone was on 24th Nov, 2018.' },
    { alertID: 3, alertClass: 'alert-danger', alertType: 'danger', alertDescription: 'Next upcoming contact with Blue Stone is on 28th Dec, 2018.' },
    /* { alertID: 3, alertClass: 'alert-danger', alertType: 'danger ', alertDescription: 'Axxess Corp contact is overdue.' },
    { alertID: 4, alertClass: 'alert-danger', alertType: 'danger', alertDescription: 'SKY Project contact is long overdue.' } */
  ]
  alertsCount: number;
  constructor(public MglTimelineModule: MglTimelineModule) { }

  ngOnInit() {
    this.alertsCount = Object.keys(this.alerts).length
  }

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;
  public filterToggle : boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }


  entries = [
    {
      class: 'mgl-timeline-entry-dot-alert',
      date:'Mon, 5 Nov 2018 08:54',
      element:'fa fa-map-o',
      dataelement:'fa fa-bookmark-o',
      headerClass: 'notesClass',
      header: 'Alert',
      content: 'Last contact for Blue Stone was on 24th Nov, 2018.'
    },
    {
      class: 'mgl-timeline-entry-dot-alert',
      date:'Thu, 08 Nov 2018 19:14',
      element:'fa fa-map-o',
      dataelement:'fa fa-bookmark-o',
      headerClass: 'notesClass',
      header: 'Alert',
      content: 'Next upcoming contact with Blue Stone is on 28th Dec, 2018.'
    },
  ]


  addEntry() {
    this.entries.push({
      header: 'header',
      date:'date',
      dataelement:'dataelement',
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
}
