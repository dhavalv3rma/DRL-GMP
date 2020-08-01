import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ScheduleAssetsComponent } from './schedule-assets/schedule-assets.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AssetsScheduleDialogComponent } from './schedule-assets/assets-schedule-dialog/assets-schedule-dialog.component';

const routes :Routes = [
  { path: '', redirectTo: 'schedule-assets', pathMatch: 'full' },
  { path: 'manage-assets', component: ManageAssetsComponent, data: { breadcrumb: 'Assets' } },
  { path: 'schedule-assets', component: ScheduleAssetsComponent, loadChildren: './schedule-assets/schedule-assets.module#ScheduleAssetsModule', data: { breadcrumb: 'Manage Assets' } },

]
@NgModule({
  declarations: [ManageAssetsComponent,ScheduleAssetsComponent,AssetsScheduleDialogComponent
    ],
  imports: [
    CommonModule, RouterModule.forChild(routes),SharedModule,ConfirmationPopoverModule
     
  ],
  entryComponents:[
    AssetsScheduleDialogComponent
  ]
})
export class AssetsModule { }
