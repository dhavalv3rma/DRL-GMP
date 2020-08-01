import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditDashboardComponent } from './audit-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleComponent } from './dashboard-folder/schedule/schedule.component';
import { InitiatedComponent } from './dashboard-folder/initiated/initiated.component';
import { CompletedComponent } from './dashboard-folder/completed/completed.component';
import { AuditReportComponent } from './dashboard-folder/audit-report/audit-report.component';
import { CapaComponent } from './dashboard-folder/capa/capa.component';
import { AuditeeResponseComponent } from './dashboard-folder/auditee-response/auditee-response.component';
import { AuditorRemarksComponent } from './dashboard-folder/auditor-remarks/auditor-remarks.component';
import { ActionPlanComponent } from './dashboard-folder/action-plan/action-plan.component';
import { AuditClosedComponent } from './dashboard-folder/audit-closed/audit-closed.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from '../../shared/shared.module';
import { AddEmailDialogComponent } from './dashboard-folder/audit-closed/add-email-dialog/add-email-dialog.component';
import { AddDiaryDialogComponent } from './dashboard-folder/auditor-remarks/add-diary-dialog/add-diary-dialog.component';
import { AddCapaDialogComponent } from './dashboard-folder/capa/add-capa-dialog/add-capa-dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddObservationDialogComponent } from './dashboard-folder/auditee-response/add-observation-dialog/add-observation-dialog.component';
import { ChecklistPieComponent } from './dashboard-folder/checklist-pie/checklist-pie.component';
import { AgendaPieComponent } from './dashboard-folder/agenda-pie/agenda-pie.component';
import { DiaryPieComponent } from './dashboard-folder/diary-pie/diary-pie.component';
import { ObservationsPieComponent } from './dashboard-folder/observations-pie/observations-pie.component';
import { CapaPieComponent } from './dashboard-folder/capa-pie/capa-pie.component';
import { AuditreportPieComponent } from './dashboard-folder/auditreport-pie/auditreport-pie.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { CriticalComponent } from './dashboard-folder/auditee-response/critical/critical.component';
import { ModerateComponent } from './dashboard-folder/auditee-response/moderate/moderate.component';
import { LowComponent } from './dashboard-folder/auditee-response/low/low.component';
import { AddActionDialogComponent } from './dashboard-folder/auditee-response/add-action-dialog/add-action-dialog.component';
import { AddDocDialogComponent } from './dashboard-folder/auditee-response/add-doc-dialog/add-doc-dialog.component';
import { AccordionModule } from 'primeng/accordion';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AssignCapaComponent } from './dashboard-folder/capa/assign-capa/assign-capa.component';
import { RepeatObservationComponent } from './dashboard-folder/repeat-observation/repeat-observation.component';
import { IArecommendationComponent } from './dashboard-folder/iarecommendation/iarecommendation.component';
import { AddRepeatObservationsComponent } from './dashboard-folder/repeat-observation/add-repeat-observations/add-repeat-observations.component';
import { AddrecommendationDialogComponent } from './dashboard-folder/iarecommendation/addrecommendation-dialog/addrecommendation-dialog.component';

export const routes = [


  {
    path: '', component: AuditDashboardComponent, children: [
      { path: '', redirectTo: 'timeline', pathMatch: 'full' },
      { path: 'timeline', component: ScheduleComponent, data: { breadcrumb: 'Projects' } },
      { path: 'overview', component: InitiatedComponent, data: { breadcrumb: 'Projects' } },
      { path: 'checklist', component: CompletedComponent, data: { breadcrumb: 'Projects' } },
      { path: 'agenda', component: AuditReportComponent, data: { breadcrumb: 'Projects' } },
      { path: 'capa', component: CapaComponent, data: { breadcrumb: 'Projects' } },
      { path: 'observations', component: AuditeeResponseComponent, data: { breadcrumb: 'Projects' } },
      { path: 'repeat-observation', component: RepeatObservationComponent, data: { breadcrumb: 'Projects' } },
      { path: 'recommendations', component: IArecommendationComponent, data: { breadcrumb: 'Projects' } },
      { path: 'diary', component: AuditorRemarksComponent, data: { breadcrumb: 'Projects' } },
      { path: 'actionplan', component: ActionPlanComponent, data: { breadcrumb: 'Projects' } },
      { path: 'closure', component: AuditClosedComponent, data: { breadcrumb: 'Projects' } },
      { path: 'observations/critical', component: CriticalComponent, data: { breadcrumb: 'Projects' } },
      { path: 'observations/moderate', component: ModerateComponent, data: { breadcrumb: 'Projects' } },
      { path: 'observations/low', component: LowComponent, data: { breadcrumb: 'Projects' } },
      // { path: 'timeline/:prospectId', component: TimelineComponent, data: { breadcrumb: 'TIMELINE' } },
      // { path: 'calls/:prospectId', component: CallsComponent, data: { breadcrumb: 'CALLS' } },
      // { path: 'contacts/:prospectId', component: ContactsComponent, data: { breadcrumb: 'CONTACTS' } },
      // { path: 'emails/:prospectId', component: EmailsComponent, data: { breadcrumb: 'EMAILS' } },
      // { path: 'linkedin/:prospectId', component: LinkedinComponent, data: { breadcrumb: 'LINKEDIN' } },
      // { path: 'meetings/:prospectId',
     // loadChildren: './prospects-dashboard/meeting/meeting.module#MeetingModule', data: { breadcrumb: 'MEETINGS' } },
      // { path: 'messages/:prospectId', component: MessagesComponent, data: { breadcrumb: 'MESSAGES' } },
      // { path: 'notes/:prospectId', component: NotesComponent, data: { breadcrumb: 'NOTES' } },
      // { path: 'opportunities/:prospectId', component: OpportunitiesComponent, data: { breadcrumb: 'OPPORTUNTIES' } },
      // { path: 'any/:prospectId', component: SequenceComponent, data: { breadcrumb: 'ANY' } },
      // { path: 'qualification/:prospectId', component: QualificationComponent, data: { breadcrumb: 'QUALIFICATION' } },
    ], data: { breadcrumb: 'Projects', }
  },

  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: AuditDashboardComponent, data: { breadcrumb: 'Projects' } },
];

@NgModule({
  declarations: [AuditDashboardComponent, ScheduleComponent, InitiatedComponent,
    CompletedComponent, AuditReportComponent, CapaComponent, AuditeeResponseComponent,
    AuditorRemarksComponent, ActionPlanComponent, AuditClosedComponent, AddEmailDialogComponent,
    AddDiaryDialogComponent, AddCapaDialogComponent, AddObservationDialogComponent, ChecklistPieComponent,
    AgendaPieComponent, DiaryPieComponent, ObservationsPieComponent, CapaPieComponent, AuditreportPieComponent,
    CriticalComponent, ModerateComponent, LowComponent, AddActionDialogComponent, AddDocDialogComponent, AssignCapaComponent, RepeatObservationComponent, IArecommendationComponent, AddRepeatObservationsComponent, AddrecommendationDialogComponent],
  imports: [
    CommonModule, NgxChartsModule, MglTimelineModule, FormsModule,
    ReactiveFormsModule, RouterModule.forChild(routes), ConfirmationPopoverModule,
    SharedModule, OwlDateTimeModule, OwlNativeDateTimeModule, AccordionModule,
    SelectButtonModule
  ],
  entryComponents: [AddEmailDialogComponent, AddDiaryDialogComponent, AddCapaDialogComponent, AddObservationDialogComponent, AssignCapaComponent,
    AddActionDialogComponent, AddDocDialogComponent, AddRepeatObservationsComponent,AddrecommendationDialogComponent]
})
export class AuditDashboardModule { }
