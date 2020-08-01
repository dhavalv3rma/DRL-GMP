import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashesComponent } from './dashes.component';
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  { path: '', component: DashesComponent, pathMatch: 'full' }
];




@NgModule({
  declarations: [DashesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashesModule { }
