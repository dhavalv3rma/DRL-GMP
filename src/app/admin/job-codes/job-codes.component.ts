import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddjobdialogueComponent } from './addjobdialogue/addjobdialogue.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-job-codes',
  templateUrl: './job-codes.component.html',
  styleUrls: ['./job-codes.component.scss']
})
export class JobCodesComponent implements OnInit {
  jobcode = [
    {jobcode:"Admin Assistant",rate:"55",status:true},
    {jobcode:"Book Keeper",rate:"75",status:true},
    {jobcode:"CAD Supervisor",rate:"82",status:true},
    {jobcode:"Cals & Cad",rate:"65",status:true},
    {jobcode:"Field Assistant",rate:"70",status:true},
    {jobcode:"GIS Manager",rate:"90",status:false},
    {jobcode:"IT Technician",rate:"50",status:true}
    
 ];
 clientnameOptions=["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes","AECOM"];
 contactnameOptions=["Isaac Walker","Hilds Sweden","Henry Wade","Marco Wilson","Martin Zeller"];
constructor(public dialog: MatDialog, private ref: ChangeDetectorRef){

}
 ngOnInit() {
     // this.getleads();
 }
 filterToggle:boolean=false;
 colorOptions = ["Green", "Blue", "Gray", "Red"];
 colorOptionSelected: any;

 onColorOptionsSelected(event) {
     console.log(event); //option value will be sent as event
 }

 prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
 prospectOptionSelected: any;

 onProspectOptionsSelected(event) {
     console.log(event); //option value will be sent as event
 }

 managerOptions = ["Dwayne", "Dave"];
 managerOptionSelected: any;

 onManagerOptionsSelected(event) {
     console.log(event); //option value will be sent as event
 }

 locationOptions = ["Ontario", "Ottawa", "Vancouver", "New york", "Las Vegas", "Copenhagen", "Aarhus"];
 locationOptionSelected: any;
 onLocationOptionsSelected(event){
 console.log(event); //option value will be sent as event
 }
 public openoppurtunityDialog(oppurtunity) {
     let dialogRef = this.dialog.open(AddjobdialogueComponent, {
         data: oppurtunity,
         height: 'auto',
         width: '600px',
     });
     dialogRef.afterClosed().subscribe(oppurtunity => {
         if (oppurtunity) {
             // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
         }
     });
 }
 public openConfirmDialog(action,value,name) {
     let dialogRef = this.dialog.open(AddjobdialogueComponent, {
         data:{'action':action,'value':value,'name':name}
     });

     dialogRef.afterClosed().subscribe(account => {
         this.dialog.closeAll();
         return account;
     });
 }
 public opendocsupload(id) {
     console.log("jkhksbdjk");
     let dialogRef = this.dialog.open(AddjobdialogueComponent, {
         data: id,
         height: 'auto',
         width: '600px'
         
     });
     dialogRef.afterClosed().subscribe(data => {
     });
 }
}
