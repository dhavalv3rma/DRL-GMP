import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drilldownchart1',
  templateUrl: './drilldownchart1.component.html',
  styleUrls: ['./drilldownchart1.component.scss']
})
export class Drilldownchart1Component implements OnInit {

  multi: any[];
  view: any[] = [900, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = '';
  legendTitle: string = '';

  colorScheme = {
    domain: ['#89cff0', '#0f52ba', '#AAAAAA','#5AA454','#A10A28']
  };

  constructor() {
    const multi = [
          {
            "name": "Inadequate/No Stability Testing",
            "value": 56
          },
          {
            "name": "Analytical Data Review",
            "value": 9
          },
       
          {
            "name": "Analytical Test Discrepancies",
            "value": 5
          },
          {
            "name": "Inadequate/No Testing",
            "value": 2
          },
          {
            "name": "Contract Testing Laboratory",
            "value": 1
          },
          {
            "name": "Unaccounted Data",
            "value": 0
          }
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}