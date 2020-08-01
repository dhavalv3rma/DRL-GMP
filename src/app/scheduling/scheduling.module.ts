import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetDialogComponent } from './assets/add-asset-dialog/add-asset-dialog.component';
import { ActionCalendarComponent } from './action-calendar/action-calendar.component';
import { ScheduledialogueComponent } from './action-calendar/scheduledialogue/scheduledialogue.component';
import { TimelineLayoutComponent } from './timeline-layout/timeline-layout.component';
import { AddAssetReturnDateDialogComponent } from './assets/schedule-assets/grid-view/add-asset-return-date-dialog/add-asset-return-date-dialog.component';


const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: 'assets', component: AssetsComponent, loadChildren: './assets/assets.module#AssetsModule', data: { breadcrumb: 'Assets' } },
  { path: 'action-calendar', component: ActionCalendarComponent, data: { breadcrumb: 'Action Calendar' } },
  { path: 'timeline', component: TimelineLayoutComponent,loadChildren:'./timeline-layout/timeline.module#TimelineModule',data: { breadcrumb: 'Timeline' } },
   
]

@NgModule({
  declarations: [AssetsComponent,AddAssetReturnDateDialogComponent, AddAssetDialogComponent, 
    ActionCalendarComponent, 
    TimelineLayoutComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes),
  ],
  entryComponents:[
AddAssetDialogComponent,AddAssetReturnDateDialogComponent
  ]
})
export class SchedulingModule { }

