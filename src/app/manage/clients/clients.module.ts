import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {DataTableModule} from "angular2-datatable";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ActionCalendarComponent } from './calender-view/action-calendar.component';
import { ScheduledialogueComponent } from './calender-view/scheduledialogue/scheduledialogue.component';
import { KanbanComponent } from './kanban/kanban.component';
import { TeamDialogComponent } from './grid-view/team-dialog/team-dialog.component';
import { RemarksDialogComponent } from './grid-view/remarks-dialog/remarks-dialog.component';

export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: GridViewComponent,},
  { path: 'mapview', component: MapViewComponent },
  { path: 'calenderview', component: ActionCalendarComponent },
  { path: 'kanbanview', component: KanbanComponent },
];


@NgModule({
  declarations: [GridViewComponent, ActionCalendarComponent, ScheduledialogueComponent, MapViewComponent, GoogleMapsComponent, KanbanComponent, TeamDialogComponent, RemarksDialogComponent],
  imports: [
    FormsModule,
    DataTableModule,
    CommonModule,
    AgmCoreModule,
    ConfirmationPopoverModule,
    RouterModule.forChild(routes), ModalModule, SharedModule, HttpClientModule
  ],
  providers: [],
  exports: [RouterModule,MatCheckboxModule],
  entryComponents: [ScheduledialogueComponent,TeamDialogComponent,RemarksDialogComponent]
})
export class ClientsModule { }
