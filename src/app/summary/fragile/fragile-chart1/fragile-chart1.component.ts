import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fragile-chart1',
  templateUrl: './fragile-chart1.component.html',
  styleUrls: ['./fragile-chart1.component.scss']
})
export class FragileChart1Component implements OnInit {
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
    domain: ['#89cff0', '#0f52ba', '#ec2e2e','#ece02e']
  };

  constructor() {
    const multi = [
      {
        "name": "FTO-1",
        "series": [
          {
            "name": "Quality Oversight",
            "value": 7
          },
          {
            "name": "Lab Test & Data Management",
            "value": 19
          },
          {
            "name": "Facility & Equipment Control",
            "value": 25
          },
          {
            "name": "Documentation & Document Control",
            "value": 16
          },
          {
            "name": "Data Integrity",
            "value": 10
          },
        ]
      },
      {
        "name": "FTO-2",
        "series": [
          {
            "name": "Quality Oversight",
            "value": 10
          },
          {
            "name": "Lab Test & Data Management",
            "value": 16
          },
          {
            "name": "Facility & Equipment Control",
            "value": 18
          },
          {
            "name": "Documentation & Document Control",
            "value": 10
          },
          {
            "name": "Data Integrity",
            "value": 22
          },
        ]
      },
      {
        "name": "FTO-3",
        "series": [
          {
            "name": "Quality Oversight",
            "value": 10
          },
          {
            "name": "Lab Test & Data Management",
            "value": 5
          },
          {
            "name": "Facility & Equipment Control",
            "value": 11
          },
          {
            "name": "Documentation & Document Control",
            "value": 19
          },
          {
            "name": "Data Integrity",
            "value": 25
          },
        ]
      },
      {
        "name": "FTO-4",
        "series": [
          {
            "name": "Quality Oversight",
            "value": 17
          },
          {
            "name": "Lab Test & Data Management",
            "value": 10
          },
          {
            "name": "Facility & Equipment Control",
            "value": 5
          },
          {
            "name": "Documentation & Document Control",
            "value": 11
          },
          {
            "name": "Data Integrity",
            "value": 19
          },
        ]
      },
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}