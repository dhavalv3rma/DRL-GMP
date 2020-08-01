import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCodesComponent } from '../job-codes/job-codes.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AssetCategoriesComponent } from '../asset-categories/asset-categories.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ClientTypeComponent } from '../client-type/client-type.component';
import { SurveyTypeComponent } from '../survey-type/survey-type.component';
import { LeadSourcesComponent } from '../lead-sources/lead-sources.component';
import { ExpenseCodesComponent } from '../expense-codes/expense-codes.component';


export const routes = [
  { path: '', redirectTo: 'job-codes', pathMatch: 'full'},
  { path:'job-codes', component:JobCodesComponent, data: { breadcrumb: 'Job Codes' }},
  { path:'expense-codes', component:ExpenseCodesComponent, data: { breadcrumb: 'Expense Codes' }},

  { path:'asset_categories', component:AssetCategoriesComponent, data: { breadcrumb: 'Asset Categories' }},
  { path:'client-type', component:ClientTypeComponent, data: { breadcrumb: 'client Types' }},
  { path:'survey-type', component:SurveyTypeComponent, data: { breadcrumb: 'Survey Types' }},
  { path:'lead-source', component:LeadSourcesComponent, data: { breadcrumb: 'Lead Sources' }},
]

@NgModule({
  declarations: [JobCodesComponent,ExpenseCodesComponent,AssetCategoriesComponent,
    ClientTypeComponent,SurveyTypeComponent,LeadSourcesComponent],
  imports: [
    CommonModule,ConfirmationPopoverModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class MasterDataModule { }
