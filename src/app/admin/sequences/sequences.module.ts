import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpportunitiesTmComponent } from './opportunities-tm/opportunities-tm.component';
import { ProspectsTmComponent } from './prospects-tm/prospects-tm.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { AddStepDialogComponent } from './add-step-dialog/add-step-dialog.component';
import { FormsModule } from '@angular/forms';
// import { PrimeDragulaDirective } from './prime-dragula.directive';

const route: Routes = [
  { path: '', redirectTo: 'prospects', pathMatch: 'full' },
  { path: 'opportunities', component: OpportunitiesTmComponent, data: { breadcrumb: 'OPPORTUNTIES' } },
  { path: 'prospects', component: ProspectsTmComponent, data: { breadcrumb: 'PROSPECTS' } }

]
@NgModule({
  declarations: [AddStepDialogComponent,ProspectsTmComponent, OpportunitiesTmComponent],
  imports: [
    CommonModule,FormsModule,ModalModule,
    RouterModule.forChild(route),ConfirmationPopoverModule,SharedModule
  ],
  exports: [RouterModule],
  entryComponents:[
    AddStepDialogComponent
  ]
})
export class SequencesModule { }
