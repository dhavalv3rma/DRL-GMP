import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContactsDialogComponent } from './contacts-dialog/contacts-dialog.component';
import { MatDialog } from '@angular/material';
//import { AddOppurtunityDialogComponent } from 'src/app/crm/add-oppurtunity-dialog/add-oppurtunity-dialog.component';



@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contacts = [
       {clienttype:"HYDRO",clientName:"Hydro One",name:"Isaac Walker" ,designation:"Project Manager" ,phone:"(416) 920-5100" ,email:"isaac@gmail.com" ,region:"Ontario" ,city:"Toranto" ,postcode:"M1R 0E9.",primarycontact:"No" ,billingcontact:"Yes",createddate:"20-May-2019"},
       {clienttype:"VALLEY",clientName:"Valleymede Homes",name:"Henry Wade" ,designation:"HR Manager" ,phone:"(516) 920-5100" ,email:"henry@gmail.com" ,region:"Ontario" ,city:"Windsor" ,postcode:"M3C 0C1",primarycontact:"No" ,billingcontact:"Yes",createddate:"25-May-2019"},
       {clienttype:"SANDHOME",clientName:"Sandbank Homes",name:"Hilda Sweden" ,designation:"CAD Supervisor " ,phone:"(616) 412-1100" ,email:"hilda@gmail.com" ,region:"Ontario" ,city:"Hamilton" ,postcode:"M3C 0C2",primarycontact:"No" ,billingcontact:"Yes",createddate:"18-June-2019"},
       {clienttype:"AECOM",clientName:"AECOM",name:"Marco Wilson" ,designation:"Field Assistant" ,phone:"(856) 920-5100" ,email:"marco@gmail.com" ,region:"Ontario" ,city:"Cambridge" ,postcode:"M3C 0E4",primarycontact:"No" ,billingcontact:"Yes",createddate:"21-May-2019"},
       {clienttype:"DELHOME",clientName:"Delpark Homes",name:"Martin Zeller" ,designation:"Financial Manager" ,phone:"(426) 920-5100" ,email:"martin@gmail.com" ,region:"Ontario" ,city:"Kitchener" ,postcode:"M3C 0E1	",primarycontact:"Yes" ,billingcontact:"Yes",createddate:"28-May-2019"},
       {clienttype:"CITYHM",clientName:"City Homes",name:"Jacob White" ,designation:"H&S Manager" ,phone:"(544) 920-5100" ,email:"jacob@gmail.com" ,region:"Ontario" ,city:"Brampton" ,postcode:"M3C 0C3",primarycontact:"No" ,billingcontact:"Yes",createddate:"30-May-2019"}
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
        let dialogRef = this.dialog.open(ContactsDialogComponent, {
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
        let dialogRef = this.dialog.open(ContactsDialogComponent, {
            data:{'action':action,'value':value,'name':name}
        });
  
        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }
    public opendocsupload(id) {
        console.log("jkhksbdjk");
        let dialogRef = this.dialog.open(ContactsDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
            
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }
}
