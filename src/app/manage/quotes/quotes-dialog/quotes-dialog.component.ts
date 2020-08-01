import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-quotes-dialog',
  templateUrl: './quotes-dialog.component.html',
  styleUrls: ['./quotes-dialog.component.scss'],
  providers: [AlertService]
})
export class QuotesDialogComponent implements OnInit {

  checklistItems = [
    // {"criteria":'Has 10 Years of existence ?',"id":1},
    // {"criteria":'Presence in minimum 3 Locations ?',"id":2},
    // {"criteria":'Has more than 50 employess and not more than 500 ? ',"id":3},
    // {"criteria":'Do they have good website ? ',"id":4}
];
lead:any;
industryOptions = ["Mining","Manufacturing"];
industryOptionSelected: any;

onIndustryOptionsSelected(event) {
    console.log(event); //option value will be sent as event
}
timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
timeOptionSelected: any;

onTimeOptionsSelected(event){
console.log(event); //option value will be sent as event
}

surveyOptions = ["Reference Plan","Topo","SRPR","Builders","Site Plan","Lot Line Staking","Advice/Consultation","Other"];
hearOptions = ["Website","Social Media (Facebook, Twitter etc)","Referral (Friend, Family, Etc)","Google","Previously a Client","Other"]
stageOptions = ["Qualified","Phone Call","First Meeting","Scope","Proposal","PO#","Hold","Declined","Expired","Archived"]
bdmsOptions = ["Rohin Sama Reddy","Siva kodali","Srinu Lli","Siva Prakash"]
ClientOptions = ["City Homes","Delpark Homes","Hydro One","Sandbank Homes","Valleymede Homes"]
accountManagerOptions =["Dwayne","Dave"]
quoteAdminOptions =["James Smith","Maria Garcia","Maria Rodriguez","Maria Hernandez","Mary Smith","Robert Hernandez","Michael Rodriguez"]
prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
prospectOptionSelected: any;

onProspectOptionsSelected(event) {
    console.log(event); //option value will be sent as event
}
cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
cityOptionSelected: any;

onCityOptionsSelected(event) {
    console.log(event); //option value will be sent as event
}
regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
regionOptionSelected: any;

onRegionOptionsSelected(event) {
    console.log(event); //option value will be sent as event
}
managerOptions = ["East Rail Maintenance", "Dome Scanning","Bridge Topographic","GTA Topographic"];
managerOptionSelected: any;

onManagerOptionsSelected(event) {
    console.log(event); //option value will be sent as event
}
locationOptions = ["Texas, Houston","Washington, Seattle","oronto, Canada","New York, USA"];
    locationOptionSelected: any;
    onLocationOptionsSelected(event){
    console.log(event); //option value will be sent as event
    }



public form:FormGroup;
public passwordHide:boolean = true;
constructor(public dialogRef: MatDialogRef<QuotesDialogComponent>,
            public fb: FormBuilder, private alertService: AlertService) {
  this.form = this.fb.group({
    id: null,
    username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
    profile: this.fb.group({
      name: null,
      surname: null,  
      birthday: null,
      gender: null,
      image: null
    }),
    work: this.fb.group({
      company: null,
      position: null,
      salary: null
    }),
    contacts: this.fb.group({
      email: null,
      phone: null,
      address: null          
    }),
    social: this.fb.group({
      facebook: null,
      twitter: null,
      google: null
    }),
    settings: this.fb.group({
      isActive: null,
      isDeleted: null,
      registrationDate: null,
      joinedDate: null
    })
  });
}

ngOnInit() {
}

close(): void {
  this.dialogRef.close();
}

saveLead() {
  this.alertService.createAlert('Successfully Saved.', 1);
  this.dialogRef.close();
}

}
