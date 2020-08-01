import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRepeatObservationsComponent } from './add-repeat-observations/add-repeat-observations.component';

@Component({
  selector: 'app-repeat-observation',
  templateUrl: './repeat-observation.component.html',
  styleUrls: ['./repeat-observation.component.scss']
})
export class RepeatObservationComponent implements OnInit {

  
  constructor(public dialog : MatDialog) { }
  
  public addRepeatObservation(id) {
    let dialogRef = this.dialog.open(AddRepeatObservationsComponent, {
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
    {observations:'The practices followed in utilities management systems were found defecient, specifically', category: 'Quality System', subcat: 'Quality Oversight', log: 'Rajesh T'},
    {observations:'Procedures and practices followed in maufacturing, engineering and quality assuranc ewere found defecient, specifically', category: 'Faculty and equipment Systems', subcat: 'Validation(Process/Cleaning/Method)', log: 'Srinivas'},
  ];

}
