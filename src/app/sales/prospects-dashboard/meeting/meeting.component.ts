import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;

  tableList: Object[] = [
    { meetingId: 1, person:'Alex Manuel', type: 'Skype', location:'Las Vegas	', campaign: 'CTO', prospect:'Blue Stone India', date:'01-01-2019 12:00:00'},
    { meetingId: 1, person:'Alex Manuel', type: 'F2F', location:'Las Vegas	', campaign: 'CTO', prospect:'Blue Stone India', date:'02-13-2019 12:00:00'}
  ];

}
