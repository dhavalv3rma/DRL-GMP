import { Component } from '@angular/core';
import { single } from '../observations-pie.data';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';

@Component({
  selector: 'app-observations-pie',
  templateUrl: './observations-pie.component.html',
  styleUrls: ['./observations-pie.component.scss']
})
export class ObservationsPieComponent {

  public single: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#378D3B', '#606060', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
      Object.assign(this, {single});
  }

  public onSelect(event) {
    console.log(event);
  }

}
