import { Component, OnInit } from '@angular/core';
import { single } from '../capapiee.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-capaoverdue-chart',
  templateUrl: './capaoverdue-chart.component.html',
  styleUrls: ['./capaoverdue-chart.component.scss']
})
export class CapaoverdueChartComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single}); 
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  public onSelect(event) {
    console.log(event);
  }

}
 