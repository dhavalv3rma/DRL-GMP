import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestpracticeDialogComponent } from './bestpractice-dialog/bestpractice-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BestpracticeComponent } from './bestpractice.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


const routes: Routes = [
  { path: '', component:BestpracticeComponent, data: { breadcrumb: 'Best Practices' } },   
]

@NgModule({
  declarations: [BestpracticeComponent,BestpracticeDialogComponent],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),ConfirmationPopoverModule
  ],
  entryComponents:[BestpracticeDialogComponent]
})
export class BestpracticeModule { }
