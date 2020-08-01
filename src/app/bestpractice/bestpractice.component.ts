import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BestpracticeDialogComponent } from './bestpractice-dialog/bestpractice-dialog.component';

@Component({
  selector: 'app-bestpractice',
  templateUrl: './bestpractice.component.html',
  styleUrls: ['./bestpractice.component.scss']
})
export class BestpracticeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  public OpenAddMunicipalityDialog(item) {
    let dialogRef = this.dialog.open(BestpracticeDialogComponent, {
        height: 'auto',
        width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            
        }
    });
}

  ngOnInit() {
  }
  practice =[
    {unit:'CTO-1', location:'Buchapally', subject:'Equipment Control', description:'Equipment and utensils used in processing, holding, transferring and filling are of appropriate design, material and workmanship to prevent corrosion are meeting the standards', category:'Quality System', subcat:'Quality Oversight', visibility:'Public', logged:'Sairam', },
    {unit:'R&D', location:'Chennai', subject:'Production ', description:'The equipment for processing, transfer and filling the utensils, and the containers for holding raw and bulk materials are clean, in good repair and in sanitary condition.', category:'Laboratory System', subcat:'Control Over computerised system', visibility:'Private', logged:'Siva', },
    {unit:'CFA', location:'Hyderabad', subject:'Laboratory Controls', description:'Fresh as well as retained samples of finished products are tested for adequacy of preservation against microbial contamination', category:'Material Management System', subcat:'Material Managements and lab controls', visibility:'Public', logged:'Sairam', },
    {unit:'CTO-1', location:'Delhi', subject:'Records', description:'Finished products, documenting sampling, individual laboratory controls, test results and control status are under control.', category:'Quality System', subcat:'Quality Oversight', visibility:'Public', logged:'Sairam', },
  ]

}
