import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LookupComponent } from '../lookup/lookup.component';
import { PreferencesComponent } from '../preferences/preferences.component';
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  { path: '', redirectTo: 'lookup-options', pathMatch: 'full' },
  { path: 'lookup-options', component: LookupComponent, data: { breadcrumb: 'Lookup Options' } },
  { path: 'preferences', component: PreferencesComponent, data: { breadcrumb: 'Preferences' } },
];

@NgModule({
  declarations: [LookupComponent,PreferencesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),SharedModule
  ]
})
export class SettingsModule { }
