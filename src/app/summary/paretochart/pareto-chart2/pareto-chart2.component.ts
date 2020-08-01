import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareto-chart2',
  templateUrl: './pareto-chart2.component.html',
  styleUrls: ['./pareto-chart2.component.scss']
})
export class ParetoChart2Component implements OnInit {
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
    domain: ['#89cff0', '#0f52ba', '#AAAAAA']
  };

  constructor() {
    const multi = [
      {
        "name": "Quality Oversight",
        "series": [
          {
            "name": "FTO",
            "value": 12
          },
          {
            "name": "CTO",
            "value": 17
          }
        ]
      },
      {
        "name": "Lab Test & Data Management",
        "series": [
          {
            "name": "FTO",
            "value": 10
          },
          {
            "name": "CTO",
            "value": 15
          }
        ]
      },
      {
        "name": "Facility & Equipment Control",
        "series": [
          {
            "name": "FTO",
            "value": 15
          },
          {
            "name": "CTO",
            "value": 25
          }
        ]
      },
      {
        "name": "Documentation Control",
        "series": [
          {
            "name": "FTO",
            "value": 5
          },
          {
            "name": "CTO",
            "value": 19
          }
        ]
      },
      {
        "name": "Control over computerised system",
        "series": [
          {
            "name": "FTO",
            "value": 11
          },
          {
            "name": "CTO",
            "value": 5
          }
        ]
      },
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}