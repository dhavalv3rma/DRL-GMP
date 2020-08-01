import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddOppurtunityDialogComponent } from 'src/app/sales/opportunities/add-oppurtunity-dialog/add-oppurtunity-dialog.component';

@Component({
  selector: 'app-vacationdialogue',
  templateUrl: './vacationdialogue.component.html',
  styleUrls: ['./vacationdialogue.component.scss']
})
export class VacationdialogueComponent implements OnInit {
 
    positionOptions = ["Project Managers","Production Team","Project Admin","Administration","HR Manager","CAD Supervisor","Field Assistant","Financial Manager","H&S Manager"];
    nameOptions = ["Isaac Walker","Henry Wade","Hilda Sweden","Jacob White","Marco Wilson","Martin Zeller"]
    positionOptionSelected: any;
    public dateTime1: Date;
    onPositionOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    constructor(public dialogRef: MatDialogRef<VacationdialogueComponent>) { }
  
    ngOnInit() {
      
    }
    close(): void {
      this.dialogRef.close();
    }
  
    saveOpp() {
      this.dialogRef.close();
    }
  }
  
