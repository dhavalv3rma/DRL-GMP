import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartsComponent } from '../departs/departs.component';
import { SectionsComponent } from '../sections/sections.component';
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  { path: '', redirectTo: 'depart', pathMatch: 'full' },
  { path: 'depart', component: DepartsComponent, data: { breadcrumb: 'Depart' } },
  { path: 'sections', component: SectionsComponent, data: { breadcrumb: 'Sections' } },
];

@NgModule({
  declarations: [DepartsComponent,SectionsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),SharedModule
  ]
})
export class DepartsandsectionsModule { }
