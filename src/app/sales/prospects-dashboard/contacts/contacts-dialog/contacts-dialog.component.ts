import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.scss']
})
export class ContactsDialogComponent implements OnInit {

  clientsOptions = ["City Homes", "Delpark Homes", "Hydro One", "Sandbank Homes","Valleymede Homes","AECOM","City of Pickering","Stantec"];
  clientsOptionSelected: any;
  public dateTime1: Date;
  onClientsOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  projecttypeOptions = ["Legal", "Engineering", "Construction", "Internal"];
  projecttypeOptionSelected: any;
  onProjecttypeOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  raOptions = ["Siva","Suresh"];
  raOptionSelected: any;

  onRaOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
  timeOptionSelected: any;

  onTimeOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }

  contactOptions = ["Dwayne", "Dave", "Emily", "Joe","Stephanie", "Laurie","Other"];
  contactOptionSelected: any;
  //public dateTime1: Date;
  onContactOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  termsOptions = ["Prepaid ","Post Paid","Staged"];
  termsOptionSelected: any;

  onTermsOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  plotsOptions = ["1 ","2","3","4","5"];
  plotsOptionSelected: any;

  onPlotsOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  typeOptions = ["Residential","Corporate"];
  typeOptionSelected: any;

  onTypeOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  pmOptions = ["Dwayne","Dave"];
  pmOptionSelected: any;

  onPmOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }

  constructor(public dialogRef: MatDialogRef<ContactsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public oppurtunity: Oppurtunity) { }

  ngOnInit() {
    if(this.oppurtunity){
    } 
    else{
      this.oppurtunity = new Oppurtunity();
      this.oppurtunity.profile = new OppurtunityProfile();
      this.oppurtunity.work = new OppurtunityWork();
      this.oppurtunity.contacts = new OppurtunityContacts();
      this.oppurtunity.social = new OppurtunitySocial();
      this.oppurtunity.settings = new OppurtunitySettings();
    } 
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }
}




export class Oppurtunity {
  id: number;
  username: string;
  password: string;
  oppurtunityName:string;
  industry: string;
  Oppurtunity: number;
  profile: OppurtunityProfile;
  work: OppurtunityWork;
  contacts: OppurtunityContacts;
  social: OppurtunitySocial;
  settings: OppurtunitySettings;
}

export class OppurtunityProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class OppurtunityWork {
  company: string;
  position: string;
  salary: number;
}

export class OppurtunityContacts {
  email: string;
  phone: string;
  address: string;
}

export class OppurtunitySocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class OppurtunitySettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}