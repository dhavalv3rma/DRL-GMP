import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capa-clear-chart',
  templateUrl: './capa-clear-chart.component.html',
  styleUrls: ['./capa-clear-chart.component.scss']
})
export class CapaClearChartComponent implements OnInit {
  multi: any[];
  view: any[] = [800, 400];

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
            "value": 17
          }
        ]
      },
      {
        "name": "FTO-Sez",
        "series": [
          {
            "name": "2019",
            "value": 15
          },
          {
            "name": "2020",
            "value": 9
          }
        ]
      },
      {
        "name": "FTO-3",
        "series": [
          {
            "name": "2019",
            "value": 14
          },
          {
            "name": "2020",
            "value": 7
          }
        ]
      },
      {
        "name": "CTO-5",
        "series": [
          {
            "name": "2019",
            "value": 13
          },
          {
            "name": "2020",
            "value": 5
          }
        ]
      },
      {
        "name": "FTO-4",
        "series": [
          {
            "name": "2019",
            "value": 9
          },
          {
            "name": "2020",
            "value": 10
          }
        ]
      },
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
    
  }

}