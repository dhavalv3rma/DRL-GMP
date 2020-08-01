import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales.service';
import { Sales } from '../../sales.model';
import { Settings } from '../../../app.settings.model';
import { AppSettings } from '../../../app.settings';
import { MatDialog } from '@angular/material';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  filterToggle:boolean=false;
  public accounts: Sales[];
  public page: any;
  public settings: Settings;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public salesService: SalesService,public router:Router) {
      this.settings = this.appSettings.settings;
     }

  ngOnInit() {
    this.getaccounts();
  }
  stepsOptions = ["Opportunities","Parallel Project","Prototype","Proposal","Final Sequence","Feedback","Real Project"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
  console.log(event); 
  }
  campaignOptions = ["TDR","CEO","Startup","CV","Audit Automation","F2O","Venue Management"];
  campaignOptionSelected: any;
  
  onCampaignOptionsSelected(event){
   console.log(event); //option value will be sent as event
  }



  prospectOptions = ["BGR","Red Leaf","TCB","PIP","Axxess"];
prospectOptionSelected: any;

onProspectOptionsSelected(event){
 console.log(event); //option value will be sent as event
}



monthOptions = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      monthOptionSelected: any;
      
      onMonthOptionsSelected(event){
       console.log(event); //option value will be sent as event
      }



      yearOptions = [2015,2016,2017,2018];
yearOptionSelected: any;

onYearOptionsSelected(event){
 console.log(event); //option value will be sent as event
}

  public getaccounts(): void {
      this.accounts = null; //for show spinner each time
      this.salesService.getaccounts().subscribe(
        accounts => {
              this.accounts = accounts.slice(0,4);
          }
          );
  }
  public addaccount(account: Sales) {
      this.salesService.addaccount(account).subscribe(account => this.getaccounts());
  }
  public updateaccount(account: Sales) {
      this.salesService.updateaccount(account).subscribe(account => this.getaccounts());
  }
  public deleteaccount(account: Sales) {
      this.salesService.deleteaccount(account.id).subscribe(account => this.getaccounts());
  }


  public onPageChanged(event) {
      this.page = event;
      this.getaccounts();
      if (this.settings.fixedHeader) {
          document.getElementById('main-content').scrollTop = 0;
      }
      else {
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
      }
  }
  public openaccountDialog(account) {
    let dialogRef = this.dialog.open(AccountDialogComponent, {
        data: account,
        height: 'auto',
        width: '600px',
    });

    dialogRef.afterClosed().subscribe(account => {
        this.dialog.closeAll();
        if (account) {
           // (account.id) ? this.updateaccount(account) : this.addaccount(account);
        }
    });
}

public openConfirmDialog(action,value,name) {
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data:{'action':action,'value':value,'name':name}
  });

  dialogRef.afterClosed().subscribe(account => {
      console.log(account);
      this.dialog.closeAll();
      return account;
  });
}

}
