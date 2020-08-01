import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drilldownchart2',
  templateUrl: './drilldownchart2.component.html',
  styleUrls: ['./drilldownchart2.component.scss']
})
export class Drilldownchart2Component implements OnInit {

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
            "name": "Good documentation Practices",
            "value": 23
          },
          {
            "name": "Issuance, reciept, retrieval & archival",
            "value": 15
          },
       
          {
            "name": "Unauthorized forms",
            "value": 3
          },
          {
            "name": "Non-availability of document",
            "value": 2
          },
          {
            "name": "Contemporaneous documentation",
            "value": 1
          },
          {
            "name": "Incomplete CoAs",
            "value": 0
          }
      
    ];
    Object.assign(this, { multi })
  }

  ngOnInit(): void {
  }

}