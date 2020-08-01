import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './meeting.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { CalendarModule } from 'angular-calendar';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

export const routes = [
  { path: '', component: MeetingComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    ConfirmationPopoverModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    SharedModule,
  ]
})
export class MeetingModule { }
