import { Component, OnInit, Inject } from '@angular/core';
import { Sales, SalesProfile, SalesWork, SalesContacts, SalesSocial, SalesSettings } from '../../sales.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss'],
  providers: [AlertService]
})
export class AccountDialogComponent implements OnInit {



  prospectOptions = ["BGR","Red Leaf","TCB","PIP","Axxess"];
prospectOptionSelected: any;

onProspectOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
industryOptions = ["Mining","Manufacturing"];
  industryOptionSelected: any;

  onIndustryOptionsSelected(event) {
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
  countryOptions = ["India","Canada","Australia","USA"];
  countryOptionSelected: any;

  onCountryOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  stateOptions = ["Telangana","Mumbai","Ottawa","Toronto"];
  stateOptionSelected: any;

  onStateOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  cityOptions = ["Hyderabad","Vijayawada","New York","Texas"];
  cityOptionSelected: any;

  onCityOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
 
  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<AccountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public account: Sales,
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
    if(this.account){
      this.form.setValue(this.account);
    } 
    else{
      this.account = new Sales();
      this.account.profile = new SalesProfile();
      this.account.work = new SalesWork();
      this.account.contacts = new SalesContacts();
      this.account.social = new SalesSocial();
      this.account.settings = new SalesSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAccount() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
