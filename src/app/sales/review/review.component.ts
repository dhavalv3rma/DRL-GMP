import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  ngOnInit(): void {
    this.pending = true;
  }
  
  hrefid: any;
  filterToggle: boolean = false;
    activeindex: any = null;
    treeview: any;
  constructor(private ref: ChangeDetectorRef, public dialog: MatDialog) {
    //this.onResize();
  }
  istabs: boolean = true;
  tab1 : boolean = true;
  tab2 : boolean = false;
  
functiondd(event){
    console.log(event);
    console.log("OK")
    this.activeindex = event;
}
redrict(){
    window.open("/#/IBW/sales/projectdashboard", "_blank");
}

pending:boolean = true;
archives:boolean = false;


Pending(){
this.pending = true;
this.archives = false;
}
Archives(){
  this.pending = false;
  this.archives = true;
    }
  @ViewChild('myKanban1') myKanban: jqxKanbanComponent;
  //@HostListener('window:resize', ['$event'])

  theme: any;
  startDate: Date;
  public dateTime1: Date;
  color = [189, 215, 238, 0];

  public openoppurtunityDialog(oppurtunity) {
    // let dialogRef = this.dialog.open(AddOppurtunityDialogComponent, {
    //     data: oppurtunity,
    //     height: 'auto',
    //     width: '600px',
    // });
    

    // dialogRef.afterClosed().subscribe(oppurtunity => {
    //     if (oppurtunity) {
    //         // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
    //     }
    // });
}
  fields: any[] =
      [
          { name: 'id', type: 'string' },
          { name: 'status', map: 'state', type: 'string' },
          { name: 'text', map: 'campaign', type: 'string' },
          { name: 'content', map: 'colorCode', type: 'string' },
          { name: 'tags', map: 'lead', type: 'string' },
          { name: 'className', map: 'info', type: 'string' },
          { name: 'color', map: 'hex', type: 'string' },
          { name: 'resourceId', type: 'number' }
      ];

  getWidth(): any {
      if (document.body.offsetWidth < 850) {
          return '100%';
      }

      return '100%';
  }
  reviewpending=[
    {clientcode:"CITYHM",clientname:"City Homes",pmfullname:"Hilda Sweden",projectmanager:"Hida",projectcode:"5-12564	",datetime:"25-Apr-2019",sites:"71 Mearns Ct",deliverables:"SRPR"
    ,task:"Roof Dev",action:"Completed Field/CAD",planhrs:"2",actualhrs:"5",duedate:"23-May-2019",jobcode:"Admin Assistant (55)",fieldstaff:"Ken J."},
    {clientcode:"DELHOME",clientname:"Delpark Homes",pmfullname:"Henry Wade",projectmanager:"Henry",projectcode:"6-42568	",datetime:"28-Mar-2019",sites:"1496 Mearns Ct",deliverables:"Reference Plan"
    ,task:"Preparation",action:"Progress report",planhrs:"5",actualhrs:"7",duedate:"24-May-2019",jobcode:"Book Keeper (75)",fieldstaff:"Chris. S"},
    {clientcode:"HYDRO",clientname:"Hydro One",pmfullname:"Martin Zeller",projectmanager:"Martin",projectcode:"5-25966	",datetime:"25-Feb-2019",sites:"Baseline Rd E",deliverables:"Topographic Survey"
    ,task:"Development ",action:"Place in pending",planhrs:"4",actualhrs:"8",duedate:"29-May-2019",jobcode:"CAD Supervisor (110)",fieldstaff:"Josh L."},
    {clientcode:"SANDHOME",clientname:"Sandbank Homes",pmfullname:"Marco Wilson",projectmanager:"Marco",projectcode:"4-85624	",datetime:"23-April-2019",sites:"Mearns Ct",deliverables:"SRPR"
    ,task:"Preparation",action:"File away",planhrs:"3",actualhrs:"4",duedate:"22-May-2019",jobcode:"Calcs & CAD (85)",fieldstaff:"Petter R. "},
    {clientcode:"VALLEY",clientname:"Valleymede Homes",pmfullname:"Jacob White",projectmanager:"Jacob",projectcode:"6-15846	",datetime:"29-Feb-2019",sites:"Mearns Ave S",deliverables:"Topographic Survey"
    ,task:"Development",action:"Completed checking",planhrs:"4",actualhrs:"8",duedate:"25-May-2019",jobcode:"Field Assistant (60)",fieldstaff:"Andy J."}
  ];

  reviewarchives=[
    {clientcode:"HYDRO",clientname:"Hydro One",pmfullname:"Martin Zeller",projectmanager:"Martin",projectcode:"5-25966	",datetime:"25-Feb-2019",sites:"Baseline Rd",deliverables:"Topographic"
    ,task:"Development",action:"Place in pending",planhrs:"26",actualhrs:"22",duedate:"29-May-2019",notes:"In Process",Alert:"Moderat",reviewedon:"20-May-2019",reviewedby:"Isaac",reviewfullname:"Isaac Walker",jobcode:"Field Supervisor (110)",fieldstaff:"Jeremy C."},
    {clientcode:"SANDHOME",clientname:"Sandbank Homes",pmfullname:"Marco Wilson",projectmanager:"Marco",projectcode:"4-85624	",datetime:"23-Mar-2019",sites:"Mearns Ct",deliverables:"SRPR"
  ,task:"Roof Dev",action:"File away",planhrs:"18",actualhrs:"13",duedate:"22-May-2019",notes:"In Process",Alert:"Moderat",reviewedon:"22-April-2019",reviewedby:"Martin",reviewfullname:"Martin Zeller",jobcode:"Financial Manager (75)",fieldstaff:"Tony E."},
  {clientcode:"DELHOME",clientname:"Delpark Homes",pmfullname:"Henry Wade",projectmanager:"Henry",projectcode:"6-42568	",datetime:"28-Jan-2019",sites:"14 Mearns Ct",deliverables:"Reference Plan"
  ,task:"Development",action:"Progress report",planhrs:"25",actualhrs:"27",duedate:"24-May-2019",notes:"In Process",Alert:"Moderat",reviewedon:"23-May-2019",reviewedby:"Jason",reviewfullname:"Jason Miller",jobcode:"GIS Manager (110)",fieldstaff:"Murray J."},
  {clientcode:"CITYHM",clientname:"City Homes",pmfullname:"Hilda Sweden",projectmanager:"Hida",projectcode:"5-12564	",datetime:"25-Mar-2019",sites:"71 Mearns Ct",deliverables:"SRPR"
  ,task:"Roof Dev",action:"Field/CAD",planhrs:"24",actualhrs:"20",duedate:"23-May-2019",notes:"In Process",Alert:"Moderat",reviewedon:"20-May-2019",reviewedby:"Jacob",reviewfullname:"Jacob White",jobcode:"H&S Manager (120)",fieldstaff:"Peter R."},
  {clientcode:"SANDHOME",clientname:"Sandbank Homes",pmfullname:"Marco Wilson",projectmanager:"Marco",projectcode:"4-85624	",datetime:"23-Feb-2019",sites:"Mearns Ct",deliverables:"SRPR"
  ,task:"Preparation",action:"File away",planhrs:"18",actualhrs:"13",duedate:"22-May-2019",notes:"In Process",Alert:"Moderat",reviewedon:"22-May-2019",reviewedby:"Martin",reviewfullname:"Martin Zeller",jobcode:"HR Administrator (75)",fieldstaff:"Murray J."},
  {clientcode:"VALLEY",clientname:"Valleymede Homes",pmfullname:"Jacob White",projectmanager:"Jacob",projectcode:"6-15846	",datetime:"29-Feb-2019",sites:"Mearns Ave",deliverables:"Topographic"
  ,task:"Preparation",action:"Checking",planhrs:"15",actualhrs:"8",duedate:"25-May-2019",notes:"In Process",Alert:"Moderat",reviewedon:"21-May-2019",reviewedby:"Hilda",reviewfullname:"Hilda Sweden",jobcode:"HR Manager (55)",fieldstaff:"Ken J."}

  ];

  // resourcesAdapterFunc = (): any => {
  //     let resourcesSource =
  //     {
  //         localData:
  //             [
  //                 { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/angular/jqwidgets/styles/images/common.png', common: true },
  //                 { id: 1, name: 'Blue Stone', image: '../../../assets/img/app/stethoscope.png' },
  //                 { id: 2, name: 'Axess Corp', image: 'https://www.jqwidgets.com/angular/images/janet.png' },
  //                 { id: 3, name: 'BGR Pvt Ltd', image: '../../../assets/img/app/manufacturing.jpg' },
  //                 { id: 4, name: 'SIR', image: 'https://www.jqwidgets.com/angular/images/nancy.png' },
  //                 { id: 5, name: 'SKY', image: 'https://www.jqwidgets.com/angular/images/Michael.png' },
  //                 { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/angular/images/margaret.png' },
  //                 { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/angular/images/robert.png' },
  //                 { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Laura.png' },
  //                 { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Anne.png' }
  //             ],
  //         dataType: 'array',
  //         dataFields:
  //             [
  //                 { name: 'id', type: 'number' },
  //                 { name: 'name', type: 'string' },
  //                 { name: 'image', type: 'string' },
  //                 { name: 'common', type: 'boolean' }
  //             ]
  //     };
  //     let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
  //     return resourcesDataAdapter;
  // }
}
