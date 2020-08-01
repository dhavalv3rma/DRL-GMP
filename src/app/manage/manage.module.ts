import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CampaignsComponent } from './campaigns/campaigns.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ManageService } from './manage.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { Data } from '../fake backend/data.backend.data';
import { SalesService } from '../sales/sales.service';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CommentsComponent } from './comments/comments.component';
import { CommentsforsequenceComponent } from './commentsforsequence/commentsforsequence.component';
import { CalendarModule } from 'angular-calendar';
//import { GoogleMapsComponent } from './campaigns/google-maps/google-maps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OverdueAlertsComponent } from './overdue-alerts/overdue-alerts.component';
import { DragDropModule } from 'primeng/dragdrop';
import { AgmCoreModule } from '@agm/core';
import { ReportImgComponent } from './report-img/report-img.component';
import { PredictabilityComponent } from './predictability/predictability.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { BillingComponent } from './billing/billing.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDialogComponent } from './contacts/contacts-dialog/contacts-dialog.component';
import { QuotesDialogComponent } from './quotes/quotes-dialog/quotes-dialog.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ClientsDialogComponent } from './clients/clients-dialog/clients-dialog.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { QuoteUpdateDialogComponent } from './quotes/quote-update-dialog/quote-update-dialog.component';
//import { AssetsComponent } from './assets-scheduling/assets/assets.component';
import { ClientsGridColDialogComponent } from './clients/clients-grid-col-dialog/clients-grid-col-dialog.component';
import { QuotesGridColDialogComponent } from './quotes/quotes-grid-col-dialog/quotes-grid-col-dialog.component';
import { ContactsGridColDialogComponent } from './contacts/contacts-grid-col-dialog/contacts-grid-col-dialog.component';
import { ManageExpensesComponent } from './manage-expenses/manage-expenses.component';
import { ActionCalendarComponent } from '../scheduling/action-calendar/action-calendar.component';


export const routes = [
  /* { path: '', redirectTo: 'clients', pathMatch: 'full' }, */
  /* { path: 'quotes', component: QuotesComponent, loadChildren: './quotes/quotes.module#QuotesModule', data: { breadcrumb: 'Quotes' } }, */
  { path: '', component: ClientsComponent, loadChildren: './clients/clients.module#ClientsModule'},
  /* { path: 'contacts', component: ContactsComponent, data: { breadcrumb: 'Contacts' } }, */
  //{ path: 'action-calendar', component: ActionCalendarComponent, pathMatch: 'full', data: { breadcrumb: 'Action Calendar' } },
  /* { path: 'expenses', loadChildren: './manage-expenses/manage-expenses.module#ManageExpensesModule', component: ManageExpensesComponent, data: { breadcrumb: 'Expenses' } },
  { path: 'commentsforsequence', component: CommentsforsequenceComponent, pathMatch: 'full', data: { breadcrumb: 'Updates' } },
  { path: 'overdue-alerts', component: OverdueAlertsComponent, data: { breadcrumb: 'Overdue Alerts' } }, */
  // { path: 'time-line', component: ContactsComponent, data: { breadcrumb: 'Timeline' } },
  /* { path: 'report', component: ReportImgComponent, data: { breadcrumb: 'Reports' } },
  { path: 'predictability', component: PredictabilityComponent, data: { breadcrumb: 'Predictability' } },
  { path: 'productivity', component: ProductivityComponent, data: { breadcrumb: 'Productivity' } },
  { path: 'billing', component: BillingComponent, data: { breadcrumb: 'Billing' } },
  { path: 'scheduling-timeline', component: TimelineComponent, data: { breadcrumb: 'Timeline' } }, */
];

@NgModule({
  imports: [
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MglTimelineModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ConfirmationPopoverModule,
    CommonModule, NgDatepickerModule, 
    // NgMultiSelectDropDownModule.forRoot(),
    InMemoryWebApiModule.forFeature(Data, { delay: 500 }),
    ModalModule, SharedModule, HttpClientModule, AgmCoreModule, NgxPaginationModule, CalendarModule,
    RouterModule.forChild(routes)
  ],

  declarations: [ContactsDialogComponent, QuoteUpdateDialogComponent,
    ReportImgComponent,  ContactsComponent, CommentsforsequenceComponent,
    CommentsComponent,
    QuotesDialogComponent, OverdueAlertsComponent, ReportImgComponent, PredictabilityComponent,
    ProductivityComponent, BillingComponent, TimelineComponent, QuotesComponent,
    ClientsComponent, ClientsDialogComponent, ContactsGridColDialogComponent, ClientsGridColDialogComponent, QuotesGridColDialogComponent, GoogleMapsComponent, ManageExpensesComponent],

  providers: [ManageService, SalesService],

  entryComponents: [
    CommentsComponent, ContactsDialogComponent, QuotesDialogComponent,
    QuoteUpdateDialogComponent, ClientsDialogComponent, ClientsGridColDialogComponent,
    QuotesGridColDialogComponent, ContactsGridColDialogComponent
  ]
})
export class ManageModule { }
