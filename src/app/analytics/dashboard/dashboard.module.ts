import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { DiskSpaceComponent } from './disk-space/disk-space.component';
import { TodoComponent } from './todo/todo.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleeMapsComponent } from './googlee-maps/googlee-maps.component';
import { AgmCoreModule } from '@agm/core';
import { PieComponent } from './pie/pie.component';
import { PieeComponent } from './piee/piee.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AuditeepieComponent } from './auditeepie/auditeepie.component';
import { RemarksturnaroundpieComponent } from './remarksturnaroundpie/remarksturnaroundpie.component';
import { CapaturnaroundpieComponent } from './capaturnaroundpie/capaturnaroundpie.component';
import { AuditcompletepieComponent } from './auditcompletepie/auditcompletepie.component';
import { BargraphComponent } from './bargraph/bargraph.component';
import { OwlDateTimeContainerComponent } from 'ng-pick-datetime/date-time/date-time-picker-container.component';
import { OwlDateTimeComponent, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CapaoverdueChartComponent } from './capaoverdue-chart/capaoverdue-chart.component';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    // NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    PerfectScrollbarModule,
    SharedModule,
    AgmCoreModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    DashboardComponent,
    InfoCardsComponent,
    DiskSpaceComponent,
    TodoComponent,
    AnalyticsComponent,
    GoogleMapsComponent,
    GoogleeMapsComponent,
    PieComponent,
    PieeComponent,
    AuditeepieComponent,
    RemarksturnaroundpieComponent,
    CapaturnaroundpieComponent,
    AuditcompletepieComponent,
    BargraphComponent,
    CapaoverdueChartComponent,
  ]
})
export class DashboardModule { }
