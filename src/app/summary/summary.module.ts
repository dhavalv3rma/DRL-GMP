import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule, Routes } from '@angular/router';
import { AuditsummaryComponent } from './auditsummary/auditsummary.component';
import { ObservationsComponent } from './observations/observations.component';
import { ParetoanalysisComponent } from './paretoanalysis/paretoanalysis.component';
import { ParetochartComponent } from './paretochart/paretochart.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { FragileComponent } from './fragile/fragile.component';
import { AuditresponseComponent } from './auditresponse/auditresponse.component';
import { CapaclearComponent } from './capaclear/capaclear.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuditResponseChartComponent } from './auditresponse/audit-response-chart/audit-response-chart.component';
import { CapaClearChartComponent } from './capaclear/capa-clear-chart/capa-clear-chart.component';
import { FragileChart1Component } from './fragile/fragile-chart1/fragile-chart1.component';
import { ParetoChart1Component } from './paretochart/pareto-chart1/pareto-chart1.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ParetoChart2Component } from './paretochart/pareto-chart2/pareto-chart2.component';
import { Drilldownchart1Component } from './drilldown/drilldownchart1/drilldownchart1.component';
import { Drilldownchart2Component } from './drilldown/drilldownchart2/drilldownchart2.component';
import { Drilldownchart3Component } from './drilldown/drilldownchart3/drilldownchart3.component';
import { Drilldownchart4Component } from './drilldown/drilldownchart4/drilldownchart4.component';
import { AlertService } from '../shared/services/alert.service';
import { Genreport2Component } from './genreport2/genreport2.component';
import { GenreportEmailDialogComponent } from './genreport2/genreport-email-dialog/genreport-email-dialog.component';
import { ToastrModule } from 'ngx-toastr';
export const routes = [
  { path: '', component:SummaryComponent,children:[
  { path: 'audit-summary', component: AuditsummaryComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'observations', component: ObservationsComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'pareto-analysis', component: ParetoanalysisComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'pareto-chart', component: ParetochartComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'drilldown', component: DrilldownComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'fragile-overview', component: FragileComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'audit-response', component: AuditresponseComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'capa-clearance', component: CapaclearComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'generate-report', component: GeneratereportComponent, data: { breadcrumb: 'Summary Report' } },
  { path: 'generate-report2', component: Genreport2Component, data: { breadcrumb: 'Summary Report' } },
  ],   data: { breadcrumb: 'Summary Report' } },
  
   
]

@NgModule({
  declarations: [SummaryComponent, AuditsummaryComponent, ObservationsComponent, ParetoanalysisComponent, ParetochartComponent, DrilldownComponent, FragileComponent, AuditresponseComponent, CapaclearComponent, GeneratereportComponent,AuditResponseChartComponent, CapaClearChartComponent, FragileChart1Component, ParetoChart1Component, ParetoChart2Component, Drilldownchart1Component, Drilldownchart2Component, Drilldownchart3Component, Drilldownchart4Component, Genreport2Component, GenreportEmailDialogComponent],
  imports: [
    CommonModule,CKEditorModule, SharedModule, FormsModule, RouterModule.forChild(routes),RichTextEditorModule, NgxChartsModule, ToastrModule.forRoot() 
  ],
  providers:[AlertService],
  entryComponents:[GenreportEmailDialogComponent]

})
export class SummaryModule { 
  public Editor = ClassicEditor;
}
