import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-add-prospects-dialog',
  templateUrl: './add-prospects-dialog.component.html',
  styleUrls: ['./add-prospects-dialog.component.scss'],
  providers: [AlertService]
})
export class AddProspectsDialogComponent implements OnInit {
    industryOptions = ["Mining", "Health Care", "Finance", "Sales", "Billing", "Infrastructure", "Reporting"];
    industryOptionSelected: any;

    onIndustryOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
  constructor(public dialogRef: MatDialogRef<AddProspectsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public prospect: Prospects, private alertService: AlertService) { }

  ngOnInit() {
    if(this.prospect){
    } 
    else{
      this.prospect = new Prospects();
      this.prospect.profile = new ProspectsProfile();
      this.prospect.work = new ProspectsWork();
      this.prospect.contacts = new ProspectsContacts();
      this.prospect.social = new ProspectsSocial();
      this.prospect.settings = new ProspectsSettings();
    } 
  }
  close(): void {
    this.dialogRef.close();
  }
  saveProspect() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
}
export class Prospects {
  id: number;
  username: string;
  password: string;
  ProspectName:string;
  industry: string;
  prospects: number;
  profile: ProspectsProfile;
  work: ProspectsWork;
  contacts: ProspectsContacts;
  social: ProspectsSocial;
  settings: ProspectsSettings;
}

export class ProspectsProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class ProspectsWork {
  company: string;
  position: string;
  salary: number;
}

export class ProspectsContacts {
  email: string;
  phone: string;
  address: string;
}

export class ProspectsSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class ProspectsSettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}