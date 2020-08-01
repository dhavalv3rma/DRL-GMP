import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddOppurtunityDialogComponent } from '../opportunities/add-oppurtunity-dialog/add-oppurtunity-dialog.component';
import { AddNoteDialogComponent } from '../../shared/add-note-dialog/add-note-dialog.component';


@Component({
  selector: 'app-projectgridview',
  templateUrl: './projectgridview.component.html',
  styleUrls: ['./projectgridview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectgridviewComponent implements OnInit {
  projects = [
      {clientName:"City Homes",clienttype:"CITYHM",manager:"Dwayne",survey:"9/10",projectname:"5-12564" ,phone:"(416) 920-5100",acivities:"5/10",deliverables:"3/10",actions:"8/10",review:"6/10",schedule:"7",overview:"5",billing:"8",docs:"5",completion:"90%",status:"Active",datecreated:"04/02/2019",duedate:"05/11/2019",statuss:"Fast",active:"Yes",projecttype:"Legal",startdate:"04/26/2019",completiondate:"05/23/2019"},
      {clientName:"Delpark Homes",clienttype:"DELHOME",manager:"Dave",survey:"2/10",projectname:"4-24642" ,phone:"(616) 426-6523",acivities:"9/10",deliverables:"2/10",actions:"6/10",review:"7/10",schedule:"3",overview:"6",billing:"4",docs:"9",completion:"76%",status:"Active",datecreated:"04/10/2019",duedate:"05/14/2019",statuss:"Moderate",active:"No",projecttype:"Engineering",startdate:"04/20/2019",completiondate:"05/27/2019"},
      {clientName:"Hydro One",clienttype:"HYDRO",manager:"Dwayne",survey:"6/10",projectname:"4-82324" ,phone:"(325) 980-0051",acivities:"3/10",deliverables:"6/10",actions:"8/10",review:"1/10",schedule:"9",overview:"2",billing:"6",docs:"2",completion:"88%",status:"Active",datecreated:"04/12/2019",duedate:"05/16/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/02/2019",completiondate:"05/25/2019"},
      {clientName:"Sandbank Homes",clienttype:"SANDHOME",manager:"Dave",survey:"3/10",projectname:"6-10235" ,phone:"(563) 856-3589",acivities:"1/10",deliverables:"5/10",actions:"3/10",review:"8/10",schedule:"2",overview:"3",billing:"8",docs:"7",completion:"92%",status:"Active",datecreated:"04/18/2019",duedate:"05/20/2019",statuss:"Stagnant",active:"Yes",projecttype:"Internal",startdate:"05/11/2019",completiondate:"05/26/2019"},
      {clientName:"Valleymede Homes",clienttype:"VALLEY ",manager:"Dwayne",survey:"1/10",projectname:"2-51152" ,phone:"(456) 694-1254",acivities:"6/10",deliverables:"1/10",actions:"5/10",review:"2/10",schedule:"4",overview:"7",billing:"9",docs:"3",completion:"86%",status:"Active",datecreated:"04/21/2019",duedate:"05/21/2019",statuss:"Fast",active:"No",projecttype:"Legal",startdate:"04/18/2019",completiondate:"05/24/2019"},
      {clientName:"AECOM",clienttype:"AECOM",survey:"8/10",manager:"Dave",projectname:"7-14164" ,phone:"(312) 785-5522",acivities:"10/10",deliverables:"7/10",actions:"2/10",review:"9/10",schedule:"1/10",overview:"5",billing:"1",docs:"6",completion:"95%",status:"Active",datecreated:"04/29/2019",duedate:"05/25/2019",statuss:"Slow",active:"Yes",projecttype:"Construction",startdate:"05/01/2019",completiondate:"05/23/2019"},
  ];
  dialog: any;
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
  public opendocsupload(id) {
    console.log("jkhksbdjk");
    let dialogRef = this.dialog.open(AddNoteDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
        
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}


  // public getleads(): void {
  //     this.leads = null; //for show spinner each time
  //     this.marketingService.getleads().subscribe(
  //         leads => {
  //             this.leads = leads.slice(0,8);
  //         }
  //     );
  // }

  // public addlead(lead: Leads) {
  //     this.marketingService.addlead(lead).subscribe(lead => this.getleads());
  // }
  // public updatelead(lead: Leads) {
  //     this.marketingService.updatelead(lead).subscribe(lead => this.getleads());
  // }
  // public deletelead(lead: Leads) {
  //     this.marketingService.deletelead(lead.id).subscribe(lead => this.getleads());
  // }
  // public onPageChanged(event) {
  //     this.page = event;
  //     this.getleads();
  //     if (this.settings.fixedHeader) {
  //         document.getElementById('main-content').scrollTop = 0;
  //     }
  //     else {
  //         document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
  //     }
  // }

  public openleadDialog(lead) {
      let dialogRef = this.dialog.open(AddOppurtunityDialogComponent, {
          data: lead,
          height: 'auto',
          width: '850px',
      });

      dialogRef.afterClosed().subscribe(lead => {
          if (lead) {
              // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
          }
      });
  }

  public openConfirmDialog(action,value,name) {
      let dialogRef = this.dialog.open(AddOppurtunityDialogComponent, {
          data:{'action':action,'value':value,'name':name}
      });

      dialogRef.afterClosed().subscribe(account => {
          this.dialog.closeAll();
          return account;
      });
  }

  // selectAll() {
  //     for (var i = 0; i < this.leads.length; i++) {
  //         this.leads[i].selected = this.selectedAll;
  //     }
  // }

  // checkIfAllSelected() {
  //     this.selectedAll = this.leads.every(function(item:any) {
  //         return item.selected == true;
  //     })
  // }

}
