import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
// import { ScheduleDialogComponent } from '././schedule-dialog/schedule-dialog.component';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Subject } from 'rxjs/Subject';
import { blockTransition } from '../../../theme/utils/app-animation';
import { ScheduledialogueComponent } from './scheduledialogue/scheduledialogue.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-action-calendar',
  templateUrl: './action-calendar.component.html',
  styleUrls: ['./action-calendar.component.scss']
})
export class ActionCalendarComponent implements OnInit {

  showEmpty:boolean = false;
  isGridView: boolean = true;
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  actions: CalendarEventAction[] = [{
      label: '<i class="material-icons icon-sm white">edit</i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
          this.openScheduleDialog(event);
      }
  }, {
      label: '<i class="material-icons icon-sm white">close</i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
          this.events = this.events.filter(iEvent => iEvent !== event);
          this.snackBar.open('Event deleted successfully!', null, {
              duration: 1500
          });
          
      }
  }];
  events: CalendarEvent[] = [{
    start: addHours(startOfDay(new Date()), 1),
    end: addHours(new Date(), 1),
    title: 'CTO - 1 audit is scheduled on 2019-06-12 8:00 AM',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'FTO - 2 audit is postponed to 2019-06-12 12:00 PM',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: addHours(endOfMonth(new Date()), 1 ),
    end: addDays(endOfMonth(new Date()), 1),
    title: 'CTO - 2 audit is extended till 2019-06-29 02:00 PM ',
    color: colors.blue,
  }, { 
    start: addHours(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'CTO - 3 audit is scheduled to begin on 2019-06-12 at 04:00 PM',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];
  refresh: Subject<any> = new Subject();
  public settings: Settings;
  Actions = [
    {actiontitle:"CAD Drafting",task:"Calcs & CAD",sow:"SoW-1",site:"71 Mearns ",project:"5-12564",projectmanager:"Jeremy Buchanan",datecreated:"2019-05-15"},
    {actiontitle:"Operations Assist",task:"Administration",sow:"SoW-2",site:"20 Mearns Ct",project:"4-24642",projectmanager:"Arthur Cooper",datecreated:"2019-05-18"},
    {actiontitle:"Site Audit",task:"Fieldwork",sow:"SoW-3",site:"60 Mearns",project:"6-10235",projectmanager:"Andy Jones",datecreated:"2019-05-25"},
    {actiontitle:"Field Management",task:"Management",sow:"SoW-4",site:"71 Mearns 249",project:"2-51152",projectmanager:"Cally Johnston",datecreated:"2019-05-29"},
    {actiontitle:"Surveyor Search",task:"Disbursments",sow:"SoW-5",site:" 55 Mearns Ct",project:"7-14164",projectmanager:"Stephanle George",datecreated:"2019-06-01"},
    {actiontitle:"CAD Corrections",task:"Calcs & CAD",sow:"SoW-6",site:"85 Mearns Ct",project:"2-25986",projectmanager:"Andy Jones",datecreated:"2019-06-08"},
    {actiontitle:"Initial Survey",task:"Fieldwork",sow:"SoW-7",site:"71 Mearns Ct 20",project:"4-82324",projectmanager:"Arthur Cooper",datecreated:"2019-05-10"},
  
];
constructor(public appSettings:AppSettings, 
  public dialog: MatDialog, 
  public snackBar: MatSnackBar){
this.settings = this.appSettings.settings; 
}

audits = [
  {unit : "CTO-1",scheduleDate : "05/03/2019", auditDate:"06/03/2019", stage:"Audit Report"},
  {unit : "CTO-2",scheduleDate : "24/06/2019", auditDate:"24/06/2019", stage:"Initiated"},
  {unit : "CTO-3",scheduleDate : "20/06/2019", auditDate:"20/06/2019", stage:"Scheduled"},
  {unit : "FTO-1",scheduleDate : "19/02/2019", auditDate:"19/02/2019", stage:"CAPA"},
  {unit : "CTO-4",scheduleDate : "04/02/2019", auditDate:"06/02/2019", stage:"Audit Report"},
  {unit : "FTO-2",scheduleDate : "15/02/2019", auditDate:"19/02/2019", stage:"Auditor Remarks"},
  {unit : "FTO-3",scheduleDate : "02/01/2019", auditDate:"02/01/2019", stage:"Audit Closed"},
  {unit : "CTO-5",scheduleDate : "01/04/2019", auditDate:"01/04/2019", stage:"Auditee Response"},
]

  ngOnInit() {
  }
  scrollActions(side) {
    var ele = document.getElementById('actions');
    if(side == 'left')
    ele.scrollLeft += 190;
    else
    ele.scrollLeft -= 190;
}
dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {    
  if (isSameMonth(date, this.viewDate)) {
    if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    }
  }
}

openScheduleDialog(event){
  return;
  /* let dialogRef = this.dialog.open(ScheduledialogueComponent, {
    data: event,
    height: 'auto',
    width: '1100px',
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      if(!result.isEdit){
        result.color = colors.blue;
        result.actions = this.actions;
        this.events.push(result);
        this.refresh.next();
      }else{
        //implement edit here
      }
    }
  }); */
}
}
