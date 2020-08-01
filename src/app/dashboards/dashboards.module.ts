import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards.component';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ModalModule } from 'ngx-bootstrap';
import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';

export const routes = [
  { path: '', redirectTo: 'dashes', pathMatch: 'full' },
  { path: 'dashes', loadChildren: './dashes/dashes.module#DashesModule', pathMatch: 'full', data: { breadcrumb: 'Dashboard' } },
 
];

@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,SharedModule,PipesModule,ModalModule,TableModule,DataTableModule,OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ]
})
export class DashboardsModule { }
