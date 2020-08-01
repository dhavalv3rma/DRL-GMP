import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-response-chart',
  templateUrl: './audit-response-chart.component.html',
  styleUrls: ['./audit-response-chart.component.scss']
})
export class AuditResponseChartComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = '';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#89cff0', '#0f52ba', '#AAAAAA']
  };

  constructor() {
    const multi = [
      {
        "name": "CTO-1",
        "series": [
          {
            "name": "2019",
            "value": 10
          },
          {
            "name": "2020",
            "value": 15
          }
        ]
      },
      {
        "name": "CTO-2",
        "series": [
          {
            "name": "2019",
            "value": 19
          },
          {
            "name": "2020",
            "value": 5
          }
        ]
      },
      {
        "name": "FTO-1",
        "series": [
          {
            "name": "2019",
            "value": 25
          },
          {
            "name": "2020",
            "value": 15
          }
        ]
      },
      {
        "name": "CFA",
        "series": [
          {
            "name": "2019",
            "value": 15
          },
          {
            "name": "2020",
            "value": 23
          }
        ]
      },
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}