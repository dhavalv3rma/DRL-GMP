import { Component } from '@angular/core';
import { single, multi } from '../charts.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.scss']
})
export class BargraphComponent {
  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Months';
  public showYAxisLabel = true;
  public yAxisLabel = 'Audits';
  public colorScheme = {
    domain: ['#2F3E9E', '#378D3B', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };  
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single, multi}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }

}
