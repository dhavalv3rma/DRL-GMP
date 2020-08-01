import { Component, OnInit, Inject } from '@angular/core';
import { Leads, LeadsProfile, LeadsWork, LeadsContacts, LeadsSocial, LeadsSettings } from '../leads.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-leads-dialog',
  templateUrl: './leads-dialog.component.html',
  styleUrls: ['./leads-dialog.component.scss']
})
export class LeadsDialogComponent implements OnInit {

  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;

  onProspectOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }


  locationOptions = ["Canada", "India", "USA", "United Kingdom"];
    locationOptionSelected: any;

    onLocationOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<LeadsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public lead: Leads,
              public fb: FormBuilder) {
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
      this.lead = new Leads();
      this.lead.profile = new LeadsProfile();
      this.lead.work = new LeadsWork();
      this.lead.contacts = new LeadsContacts();
      this.lead.social = new LeadsSocial();
      this.lead.settings = new LeadsSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }


}
