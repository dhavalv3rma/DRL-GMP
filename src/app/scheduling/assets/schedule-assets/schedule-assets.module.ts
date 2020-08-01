import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SharedModule } from '../../../shared/shared.module';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


const routes: Routes = [
  { path: '', redirectTo: 'calendar-view', pathMatch: 'full' },
  { path: 'grid-view', component: GridViewComponent },
  { path: 'calendar-view', component: CalendarViewComponent },
]

@NgModule({
  declarations: [GridViewComponent, CalendarViewComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule,
    MglTimelineModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,ConfirmationPopoverModule
  ],
  entryComponents:[]
})
export class ScheduleAssetsModule { }
