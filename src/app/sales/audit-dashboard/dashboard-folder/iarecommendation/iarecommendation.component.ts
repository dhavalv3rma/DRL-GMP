import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddrecommendationDialogComponent } from './addrecommendation-dialog/addrecommendation-dialog.component';

@Component({
  selector: 'app-iarecommendation',
  templateUrl: './iarecommendation.component.html',
  styleUrls: ['./iarecommendation.component.scss']
})
export class IArecommendationComponent implements OnInit {

  
  constructor(public dialog : MatDialog) { }
  
  public addRepeatObservation(id) {
    let dialogRef = this.dialog.open(AddrecommendationDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  ngOnInit() {
  }

  
  tableList = [
    {recommendations:'Need to adherewith the standards provided', observations:'The practices followed in utilities management systems were found defecient, specifically', category: 'Quality System', subcat: 'Quality Oversight', log: 'Rajesh T'},
    {recommendations:'Need to adherewith the standards provided', observations:'Procedures and practices followed in maufacturing, engineering and quality assuranc ewere found defecient, specifically', category: 'Faculty and equipment Systems', subcat: 'Validation(Process/Cleaning/Method)', log: 'Srinivas'},
  ];

}
