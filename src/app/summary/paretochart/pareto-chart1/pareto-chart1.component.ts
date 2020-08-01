import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareto-chart1',
  templateUrl: './pareto-chart1.component.html',
  styleUrls: ['./pareto-chart1.component.scss']
})
export class ParetoChart1Component implements OnInit {
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
        "name": "Lab Test & Data Management",
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
        "name": "Facility & Equipment Control",
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
        "name": "Documentation Control",
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
      {
        "name": "Control over computerised system",
        "series": [
          {
            "name": "2019",
            "value": 11
          },
          {
            "name": "2020",
            "value": 5
          }
        ]
      },
      {
        "name": "Investigation",
        "series": [
          {
            "name": "2019",
            "value": 7
          },
          {
            "name": "2020",
            "value": 4
          }
        ]
      },
      {
        "name": "Validation(Process/Cleaning/Methods)",
        "series": [
          {
            "name": "2019",
            "value": 4
          },
          {
            "name": "2020",
            "value": 2
          }
        ]
      },
      {
        "name": "Material Management & Label Controls",
        "series": [
          {
            "name": "2019",
            "value": 3
          },
          {
            "name": "2020",
            "value": 1
          }
        ]
      },
      {
        "name": "Environment Monitoring and Microbial Testing",
        "series": [
          {
            "name": "2019",
            "value": 2
          },
          {
            "name": "2020",
            "value": 1
          }
        ]
      },
      {
        "name": "Aseptic Manufacturing Practices ",
        "series": [
          {
            "name": "2019",
            "value": 2
          },
          {
            "name": "2020",
            "value": 1
          }
        ]
      },
      {
        "name": "Data Integrity",
        "series": [
          {
            "name": "2019",
            "value": 0
          },
          {
            "name": "2020",
            "value": 1
          }
        ]
      },
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}