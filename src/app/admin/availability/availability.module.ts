import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekdaysComponent } from './weekdays/weekdays.component';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { VacationsComponent } from './vacations/vacations.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


export const routes:Routes = [
  { path: '', redirectTo: 'weekdays', pathMatch: 'full' },
  { path: 'weekdays', component: WeekdaysComponent, data: { breadcrumb: 'Weekdays' } },
  { path: 'holidays', component: HolidaysComponent, data: { breadcrumb: 'Holidays' } },
  { path: 'vacations', component: VacationsComponent, data: { breadcrumb: 'Vacations' } },
];

@NgModule({
  declarations: [WeekdaysComponent, HolidaysComponent, VacationsComponent],
  imports: [
    CommonModule,SharedModule,FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AvailabilityModule { }
