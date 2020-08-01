import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drilldownchart3',
  templateUrl: './drilldownchart3.component.html',
  styleUrls: ['./drilldownchart3.component.scss']
})
export class Drilldownchart3Component implements OnInit {

  multi: any[];
  view: any[] = [900, 400];

  // options
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
            "name": "Approved Procedures not followed",
            "value": 26
          },
          {
            "name": "Inadequate/No Procedures",
            "value": 13
          },
       
          {
            "name": "Training",
            "value": 3
          },
          {
            "name": "Quality Unit Responsibilities",
            "value": 2
          },
          {
            "name": "QMS-CCF/CAPA/BMR",
            "value": 1
          },
          {
            "name": "Regulatory Compliance-Notifications/CMC",
            "value": 0
          }
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}