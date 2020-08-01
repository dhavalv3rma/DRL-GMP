import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    {
        path:'OM',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'analytics', pathMatch: 'full'},
            { path: 'dashboards', loadChildren: './dashboards/dashboards.module#DashboardsModule', data: { breadcrumb: 'Analytics' }},
            { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: 'Analytics' }},
            { path: 'audits', loadChildren: './manage/manage.module#ManageModule', data: { breadcrumb: 'Audits' }},
            //{ path: 'summary',component:SummaryComponent, data: { breadcrumb: '' }},
            { path: 'summary',loadChildren: './summary/summary.module#SummaryModule', data: { breadcrumb: 'Summary Report' }},
            { path: 'best-practices',loadChildren: './bestpractice/bestpractice.module#BestpracticeModule', data: { breadcrumb: 'Best Practices' }},
            { path: 'sales', loadChildren: './sales/sales.module#SalesModule', data: { breadcrumb: 'Sales' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
            { path: 'scheduling', loadChildren: './scheduling/scheduling.module#SchedulingModule', data: { breadcrumb: 'Scheduling' }},
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
}); 

