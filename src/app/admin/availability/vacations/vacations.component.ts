import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VacationdialogueComponent } from './vacationdialogue/vacationdialogue.component';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  Vacations = [
    {name:"Isaac Walker",position:"Project Manager",subject:"Personal Leave",fromdate:"2019-07-26",todate:"2019-06-30"},
    {name:"Henry Wade",position:"HR Manager",subject:"Family trip",fromdate:"2019-08-01",todate:"2019-08-10"},
    {name:"Hilda Sweden",position:"CAD Supervisor",subject:"Long Weekend Plan",fromdate:"2019-07-06",todate:"2019-07-10"},
    {name:"Marco Wilson",position:"Field Assistant",subject:"Health Check-up",fromdate:"2019-06-20",todate:"2019-06-20"},
    {name:"Martin Zeller",position:"Financial Manager",subject:"Family trip",fromdate:"2019-07-10",todate:"2019-06-12"},
    {name:"Jacob White",position:"H&S Manager",subject:"Long Weekend Plan",fromdate:"2019-07-16",todate:"2019-06-18"},
  
];
  ngOnInit() {
  }
  public openleadDialog(lead) {
    let dialogRef = this.dialog.open(VacationdialogueComponent, {
        data: lead,
        height: 'auto',
        width: '600px',
    });
}

}
