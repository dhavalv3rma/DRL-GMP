import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { Clients, ClientsSettings, ClientsSocial, ClientsContacts, ClientsWork, ClientsProfile } from '../clients.model';

@Component({
  selector: 'app-clients-dialog',
  templateUrl: './clients-dialog.component.html',
  styleUrls: ['./clients-dialog.component.scss'],
  providers: [AlertService]
})
export class ClientsDialogComponent implements OnInit {
  options = new FormControl();

  public dateTime2 : Date;
  public dateTime1 : Date;



  checklistItems = [
      // {"criteria":'Has 10 Years of existence ?',"id":1},
      // {"criteria":'Presence in minimum 3 Locations ?',"id":2},
      // {"criteria":'Has more than 50 employess and not more than 500 ? ',"id":3},
      // {"criteria":'Do they have good website ? ',"id":4}
  ];
  provinceOptions=["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador",
  "Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Northwest Territories","Nunavut","Yukon"];
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

  campaignOptions =["Dwayne","Dave","John"];
  bdmsOptions = ["Rohin Sama Reddy","Siva kodali","Srinu Lli","Siva Prakash"]

  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;

  onProspectOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  cityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
  cityOptionSelected: any;

  onCityOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  munipalityOptions = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
  regionOptionSelected: any;

  onRegionOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  managerOptions = ["East Rail Maintenance", "Dome Scanning","Bridge Topographic","GTA Topographic"];
  managerOptionSelected: any;
clientTypes = ["Engineer/Engineering Firm","Private land owner","Planner","Business","Architect/Architect firm",
"Government","Home builder","Law firm","Realtor","Utility company","Surveyor/Survey firm","Developer"];
 
countries =["Canada","USA"]

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
  constructor(public dialogRef: MatDialogRef<ClientsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public lead: Clients,
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
    if(this.lead){
      this.form.setValue(this.lead);
    } 
    else{
      this.lead = new Clients();
      this.lead.profile = new ClientsProfile();
      this.lead.work = new ClientsWork();
      this.lead.contacts = new ClientsContacts();
      this.lead.social = new ClientsSocial();
      this.lead.settings = new ClientsSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

  saveLead() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
