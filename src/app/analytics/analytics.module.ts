import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { RouterModule } from '@angular/router';
//import { AlertsTmComponent } from './taskmanager/alerts-tm/alerts-tm.component';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
//import { ReportsComponent } from './reports/reports.component';
export const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full', data: { breadcrumb: 'Analytics' } },
 // { path: 'reports', component: TaskmanagerComponent, data: { breadcrumb: 'Reports' } },
  //{ path: 'calender', component: ReportsComponent, data: { breadcrumb: 'Calendar' } },
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [//TaskmanagerComponent,AlertsTmComponent//, ReportsComponent
  ]
})
export class AnalyticsModule { }
