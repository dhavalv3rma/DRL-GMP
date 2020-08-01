import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SalesService } from './sales.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Data } from '../fake backend/data.backend.data';
import { AddOppurtunityDialogComponent } from './opportunities/add-oppurtunity-dialog/add-oppurtunity-dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { AccountDialogComponent } from './accounts/account-dialog/account-dialog.component';
import {TabViewModule} from 'primeng/tabview';
import { ProspectsComponent } from './prospects.component';
import { ProjectMapsComponent } from './project-maps/project-maps.component';
import { AgmCoreModule } from '@agm/core';
import { ProjectgridviewComponent } from './projectgridview/projectgridview.component';
import { ModalModule } from 'ngx-bootstrap';
import {AddProspectsDialogComponent} from './add-prospects-dialog/add-prospects-dialog.component';
import {DragDropModule} from 'primeng/dragdrop';
import { TimelinenewComponent } from './timelinenew/timelinenew.component';
import { ProspectsDashboardComponent1 } from './prospects-dashboard.component';
// import { TimelineComponent } from '../marketing/prospects/prospects-dashboard/timeline/timeline.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { TimelineComponent } from './prospects-dashboard/timeline/timeline.component';
import { AlertsComponent } from './prospects-dashboard/alerts/alerts.component';
import { CallsComponent } from './prospects-dashboard/calls/calls.component';
import { ContactsComponent } from './prospects-dashboard/contacts/contacts.component';
import { EmailsComponent } from './prospects-dashboard/emails/emails.component';
import { LeadsComponent } from './prospects-dashboard/leads/leads.component';
import { LinkedinComponent } from './prospects-dashboard/linkedin/linkedin.component';
import { MeetingComponent } from './prospects-dashboard/meeting/meeting.component';
import { MessagesComponent } from './prospects-dashboard/messages/messages.component';
import { NotesComponent } from './prospects-dashboard/notes/notes.component';
import { NotesDialogComponent } from './prospects-dashboard/notes/notes-dialog/notes-dialog.component';
import { QualificationComponent } from './prospects-dashboard/qualification/qualification.component';
import { SequenceComponent } from './prospects-dashboard/sequence/sequence.component';
import { CallsDialogComponent } from './prospects-dashboard/calls/calls-dialog/calls-dialog.component';
import { ContactsDialogComponent } from './prospects-dashboard/contacts/contacts-dialog/contacts-dialog.component';
import { LeadsDialogComponent } from './prospects-dashboard/leads/leads-dialog/leads-dialog.component';
import { LinkedinDialogComponent } from './prospects-dashboard/linkedin/linkedin-dialog/linkedin-dialog.component';
import { EmailDialogComponent } from './prospects-dashboard/emails/email-dialog/email-dialog.component';
import { MessagesDialogComponent } from './prospects-dashboard/messages/messages-dialog/messages-dialog.component';
import { SequenceDialogComponent } from './prospects-dashboard/sequence/sequence-dialog/sequence-dialog.component';
import { ReviewComponent } from './review/review.component';
import { ChartModule } from 'angular2-highcharts';
import { SitespieComponent } from './sitespie/sitespie.component';
import { TaskspieComponent } from './taskspie/taskspie.component';
import { ActionspieComponent } from './actionspie/actionspie.component';
import { DeliverablespieComponent } from './deliverablespie/deliverablespie.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
//import { ProspectsDashboardComponent } from '../marketing/prospects/prospects-dashboard.component';

declare var require: any;

    export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
    }

export const routes = [
  { path: '', redirectTo: 'opportunities', pathMatch: 'full' },
  { path: 'projects', component: OpportunitiesComponent, data: { breadcrumb: 'Projects' } },
  { path: 'projectdashboard', component: TimelinenewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'dashboard', component: ProspectsDashboardComponent1, data: { breadcrumb: 'Project Dashboard' } },
  {path:'review',component:ReviewComponent,data:{breadcrumb:'Projects Review'}},
  { path:'auditdashboard', loadChildren:'./audit-dashboard/audit-dashboard.module#AuditDashboardModule', data:{ breadcrumb:'Audit Dashboard'} },

  // { path: 'timeline', component: TimelinenewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'contacts', component: ContactsComponent, data: { breadcrumb: 'Contacts' }}

];
@NgModule({
  imports: [
    DragDropModule,
    MglTimelineModule,
    CommonModule,OwlDateTimeModule,OwlNativeDateTimeModule,FormsModule,
    // NgMultiSelectDropDownModule.forRoot(),
    InMemoryWebApiModule.forFeature(Data, { delay: 500 }),
    RouterModule.forChild(routes),
    NgxChartsModule,
    SharedModule, NgxPaginationModule,HttpClientModule,TabViewModule,AgmCoreModule,ModalModule.forRoot(),
    ChartModule
  ],
  declarations: [OpportunitiesComponent,AlertsComponent,CallsComponent, ContactsComponent,EmailsComponent,
    LeadsComponent,LinkedinComponent,MessagesComponent,AddProspectsDialogComponent,AccountDialogComponent,ProspectsDashboardComponent1, 
    AddOppurtunityDialogComponent, ProspectsComponent, ProjectMapsComponent, 
    ProjectgridviewComponent, TimelinenewComponent,TimelineComponent,
    NotesComponent,NotesDialogComponent,QualificationComponent,SequenceComponent, CallsDialogComponent,
    ContactsDialogComponent, LeadsDialogComponent, LinkedinDialogComponent, EmailDialogComponent, MessagesDialogComponent,
    SequenceDialogComponent,
    ReviewComponent,
    SitespieComponent,
    TaskspieComponent,
    ActionspieComponent,
    DeliverablespieComponent,
    
    
],
  entryComponents: [AccountDialogComponent,AddOppurtunityDialogComponent,AddProspectsDialogComponent,ContactsDialogComponent],
  providers: [SalesService,{ provide: LocationStrategy, useClass: HashLocationStrategy },{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }]
})
export class SalesModule { }
