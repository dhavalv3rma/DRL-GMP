import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequencesComponent } from './sequences/sequences.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddLookupDialogComponent } from './lookup/add-lookup-dialog/add-lookup-dialog.component';
import { RolesComponent } from './roles/roles.component';
import { ConfigureKanbanComponent } from './configure-kanban/configure-kanban.component';
import { RoleDialogComponent } from './roles/role-dialog/role-dialog.component';
import { AlertService } from '../shared/services/alert.service';
import { AddjobdialogueComponent } from './job-codes/addjobdialogue/addjobdialogue.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { SettingsComponent } from './settings/settings.component';
import { AvailabilityComponent } from './availability/availability.component';
import { VacationdialogueComponent } from './availability/vacations/vacationdialogue/vacationdialogue.component';
import { AddClientTypeDialogComponent } from './client-type/add-client-type-dialog/add-client-type-dialog.component';
import { AddSurveyTypeModalComponent } from './survey-type/add-survey-type-modal/add-survey-type-modal.component';
import { AddLeadSourceDialogComponent } from './lead-sources/add-lead-source-dialog/add-lead-source-dialog.component';
import { AddAssetCategoryDialogComponent } from './asset-categories/add-asset-category-dialog/add-asset-category-dialog.component';
import { AddExpenseCodeDialogComponent } from './expense-codes/add-expense-code-dialog/add-expense-code-dialog.component';
import { LocationComponent } from './location/location.component';
import { LevelsComponent } from './levels/levels.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { ClassCodesComponent } from './class-codes/class-codes.component';
import { ClassCodeDialogComponent } from './class-codes/class-codes-dialog/class-codes-dialog.component';
import { AddLocationDialogComponent } from './location/add-location-dialog/add-location-dialog.component';
import { DepartsandsectionsComponent } from './departsandsections/departsandsections.component';
import { AddSectionDialogComponent } from './sections/add-section-dialog/add-section-dialog.component';
import { AddDepartsDialogComponent } from './departs/add-departs-dialog/add-departs-dialog.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { AddCategoryDialogComponent } from './categories/add-category-dialog/add-category-dialog.component';
import { AddSubCategoryDialogComponent } from './sub-categories/add-sub-category-dialog/add-sub-category-dialog.component';
import { AgendaTemplateComponent } from './agenda-template/agenda-template.component';
import { ChecklistTemplateComponent } from './checklist-template/checklist-template.component';
import { AddAgendaTemplateComponent } from './agenda-template/add-agenda-template/add-agenda-template.component';
import { AddChecklistTemplateComponent } from './checklist-template/add-checklist-template/add-checklist-template.component';
import { AuditTrailDialogComponent } from './audit-trail-dialog/audit-trail-dialog.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  { path: 'roles', component: RolesComponent, data: { breadcrumb: 'Manage Roles' } },
  // { path: 'configure_kanban', component: ConfigureKanbanComponent, data: { breadcrumb: 'Configure Kanban' } },
  { path: 'audittrail', component: AuditTrailComponent, data: { breadcrumb: 'Audit Trail' } },
  { path: 'kanban', component: SequencesComponent, loadChildren: './sequences/sequences.module#SequencesModule', data: { breadcrumb: 'Kanban' } },
  // { path: 'master-data', component: MasterDataComponent, loadChildren: './master-data/master-data.module#MasterDataModule', data: { breadcrumb: 'Master Data' } },
  /* { path: 'master-lists', component: MasterListsComponent, loadChildren: './master-lists/master-lists.module#MasterListsModule', data: { breadcrumb: 'Master List' } }, */
  { path: 'settings', component: SettingsComponent, loadChildren: './settings/settings.module#SettingsModule', data: { breadcrumb: 'Settings' } },
  // { path: 'locations', component:LocationComponent, pathMatch: 'full', data: { breadcrumb: 'Locations'} },
  { path: 'levels', component:LevelsComponent, pathMatch: 'full', data: { breadcrumb: 'Service Levels'} },
  { path: 'classcodes', component:ClassCodesComponent, pathMatch: 'full', data: { breadcrumb: 'Class Codes'} },
  { path: 'categories', component:CategoriesComponent, pathMatch: 'full', data: { breadcrumb: 'Categories'} },
  { path: 'subcategories', component:SubCategoriesComponent, pathMatch: 'full', data: { breadcrumb: 'Sub-Categories'} },
  { path: 'agendatemplate', component:AgendaTemplateComponent, pathMatch: 'full', data: { breadcrumb: 'Agenda Template'} },
  { path: 'checklisttemplate', component:ChecklistTemplateComponent, pathMatch: 'full', data: { breadcrumb: 'Checklist Template'} },
  // { path: 'depts', component:DepartsandsectionsComponent, loadChildren: './departsandsections/departsandsections.module#DepartsandsectionsModule', data: { breadcrumb: 'Depts & Sections'} },
  { path: 'audit-trail', component:AuditTrailComponent, pathMatch: 'full', data: { breadcrumb: 'Audit Trail'} },
 
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule],

  providers: [DragulaService, AlertService],

  declarations: [
    SequencesComponent, 
    AddLookupDialogComponent,
    RolesComponent,
    ConfigureKanbanComponent,
    RoleDialogComponent,
    AddjobdialogueComponent, 
    MasterDataComponent, 
   SettingsComponent,AddClientTypeDialogComponent, 
   LocationComponent,
   LevelsComponent,
   AuditTrailComponent,
   ClassCodesComponent,
   AddLocationDialogComponent,
   AvailabilityComponent,VacationdialogueComponent,AddSurveyTypeModalComponent,
    AddLeadSourceDialogComponent,
    AddAssetCategoryDialogComponent,
    AddExpenseCodeDialogComponent,
    ClassCodeDialogComponent,
    DepartsandsectionsComponent,
    AddSectionDialogComponent,
    AddDepartsDialogComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    AddCategoryDialogComponent,
    AddSubCategoryDialogComponent,
    AgendaTemplateComponent,
    ChecklistTemplateComponent,
    AddAgendaTemplateComponent,
    AddChecklistTemplateComponent,
    AuditTrailDialogComponent],

  entryComponents: [
    AuditTrailDialogComponent,
    AddLookupDialogComponent,AddAssetCategoryDialogComponent,AddExpenseCodeDialogComponent,
    AddjobdialogueComponent,ClassCodeDialogComponent,
    AddClientTypeDialogComponent,
    RoleDialogComponent,VacationdialogueComponent,
    AddSurveyTypeModalComponent,AddLeadSourceDialogComponent,
    AddLocationDialogComponent,AddSectionDialogComponent,
    AddDepartsDialogComponent,AddCategoryDialogComponent,AddSubCategoryDialogComponent,AddAgendaTemplateComponent,AddChecklistTemplateComponent
  ]
})
export class AdminModule { }
