import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-timelinenew',
  templateUrl: './timelinenew.component.html',
  styleUrls: ['./timelinenew.component.scss']
})
export class TimelinenewComponent implements OnInit {
  public link: string;
  public description: {};
  public breadcrumbs: {
      name: string;
      url: string
  }[] = [];



  public pieChart : Chart
/*Main navigation tabs*/
 public isTimeline    :boolean;
 public isOverview    :boolean;
 public isSites       :boolean;
 public isTasks       :boolean;
 public isDeliverables:boolean;
 public isActions     :boolean;
 public isExpenses    :boolean;
 public isReview      :boolean;
 public isBilling     :boolean;
 public isDocs        :boolean;
 public isAlerts      :boolean;

/*Over view navigation tabs*/
public isProjectSummary     : boolean;
public isSiteSummary        : boolean;
public isDeliverableSummary : boolean;
public isTasksSummary       : boolean;
public isActionSummary      : boolean;

// Review tabs

public isReviewPending :boolean;
public isReviewArchives : boolean;

//Billing tabs

public isWIP      : boolean;
public isBilled   : boolean;
public isInvoice  : boolean;

//Tasks tabs

public isTaskGV  : boolean;
public isTaskCV  : boolean;

/* Chart objects*/
sites_distribution: Object;
deliverables_distribution: Object;
tasks_distribution: Object;
actions_distribution: Object;



reviewpending=[
    {clientcode:"CITYHM",clientname:"City Homes",pmfullname:"Hilda Sweden",projectmanager:"Hida",projectcode:"5-12564	",datetime:"25-Apr-2019",sites:"71 Mearns Ct",deliverables:"SRPR"
    ,task:"Roof Dev",action:"Completed Field/CAD",planhrs:"24",actualhrs:"20",duedate:"23-May-2019",jobcode:"Admin Assistant (55)",fieldstaff:"Ken J."},
    {clientcode:"DELHOME",clientname:"Delpark Homes",pmfullname:"Henry Wade",projectmanager:"Henry",projectcode:"6-42568	",datetime:"28-Mar-2019",sites:"1496 Mearns Ct",deliverables:"Reference Plan"
    ,task:"Preparation",action:"Progress report",planhrs:"25",actualhrs:"27",duedate:"24-May-2019",jobcode:"Book Keeper (75)",fieldstaff:"Chris. S"},
    {clientcode:"HYDRO",clientname:"Hydro One",pmfullname:"Martin Zeller",projectmanager:"Martin",projectcode:"5-25966	",datetime:"25-Feb-2019",sites:"Baseline Rd E",deliverables:"Topographic Survey"
    ,task:"Development ",action:"Place in pending",planhrs:"26",actualhrs:"22",duedate:"29-May-2019",jobcode:"CAD Supervisor (110)",fieldstaff:"Josh L."},
    {clientcode:"SANDHOME",clientname:"Sandbank Homes",pmfullname:"Marco Wilson",projectmanager:"Marco",projectcode:"4-85624	",datetime:"23-April-2019",sites:"Mearns Ct",deliverables:"SRPR"
    ,task:"Preparation",action:"File away",planhrs:"18",actualhrs:"13",duedate:"22-May-2019",jobcode:"Calcs & CAD (85)",fieldstaff:"Petter R. "},
    {clientcode:"VALLEY",clientname:"Valleymede Homes",pmfullname:"Jacob White",projectmanager:"Jacob",projectcode:"6-15846	",datetime:"29-Feb-2019",sites:"Mearns Ave S",deliverables:"Topographic Survey"
    ,task:"Development",action:"Completed checking",planhrs:"15",actualhrs:"8",duedate:"25-May-2019",jobcode:"Field Assistant (60)",fieldstaff:"Andy J."}
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

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute) { 

        this.sites_distribution =
        {chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title:{text:"Sites Distribution"},
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },

        credits:{
            enabled:false
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Completed',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Pending',
                y: 11.84
            }, {
                name: 'Overdue',
                y: 10.85
            }]
        }]
    }

this.deliverables_distribution = 
{
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title:{text:"Deliverables Distribution"},
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    
// legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'middle'
// },

    credits:{
        enabled:false
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Completed',
            y: 55.41,
            sliced: true,
            selected: true
        }, {
            name: 'Pending',
            y: 15.84
        }, {
            name: 'Overdue',
            y: 20.85
        }]
    }]
}


this.tasks_distribution=
{
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title:{text:"Tasks Distribution"},
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    
// legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'middle'
// },

    credits:{
        enabled:false
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Completed',
            y: 70.41,
            sliced: true,
            selected: true
        }, {
            name: 'Pending',
            y: 15.84
        }, {
            name: 'Overdue',
            y: 10.85
        }]
    }]
}

this.actions_distribution = 
{
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title:{text:"Actions Distribution"},
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    
// legend: {
//     layout: 'vertical',
//     align: 'right',
//     verticalAlign: 'middle'
// },

    credits:{
        enabled:false
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Completed',
            y: 60.41,
            sliced: true,
            selected: true
        }, {
            name: 'Pending',
            y: 15.84
        }, {
            name: 'Overdue',
            y: 10.85
        }]
    }]
}

console.log(this.Sites);

      this.description = {
          "TIMELINE" : " This page is used to manage timeline information.",
          "SEQUENCE" : " This page is used to manage sequence information.",
          "NOTES" : " This page is used to manage notes information.",
          "EMAILS" : " This page is used to manage emails information.",
          "MESSAGES" : " This page is used to manage messages information.",
          "LINKEDIN" : " This page is used to manage linkedin information.",
          "CALLS" : " This page is used to manage calls information.",
          "OPPORTUNITIES" : " This page is used to manage opportunities information.",
          "LEADS" : " This page is used to manage leads information.",
          "CONTACTS" : " This page is used to manage contacts information.",
          "MEETINGS" : " This page is used to manage meetings information.",
          "ALERTS" : " This page is used to manage alerts information.",
      };
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            this.breadcrumbs = [];
            this.parseRoute(this.router.routerState.snapshot.root);
            //this.link = this.breadcrumbs[2]['name'];
        }
      })
      this.isTimeline = true;
    }


    TaskGV() {
        this.isTaskGV =true;
        this.isTaskCV =false;
    }
    TaskCV() {
        this.isTaskGV =false;
        this.isTaskCV =true;
    }



    WIP(){
        this.isWIP     =true;
        this.isBilled  =false;
        this.isInvoice =false;
    }
    Billed(){
        this.isWIP     =false;
        this.isBilled  =true;
        this.isInvoice =false;
    }
    Invoice(){
        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =true;
    }



    ReviewPending(){
        this.isReviewPending  =true;
        this.isReviewArchives =false;
    }
    ReviewArchives(){
        this.isReviewPending  =false;
        this.isReviewArchives =true;
    }


    ProjectSummary(){
        this.isProjectSummary     =true;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;
    }
    
    SiteSummary(){
        this.isProjectSummary     =false;
        this.isSiteSummary        =true;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;
    }
    DeliverableSummary(){
        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =true;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;
    }
    TasksSummary(){
        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =true;
        this.isActionSummary      =false;
    }
    ActionSummary(){
        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =true;
    }





    Timeline(){
        this.isTimeline    =true;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;

    }
    Overview(){
        this.isTimeline    =false;
        this.isOverview    =true;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =true;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;
        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Sites(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =true;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Tasks(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =true;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =true;
        this.isTaskCV =false;
    }
    Deliverables(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=true;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Actions(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =true;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Expenses(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =true;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Review(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =true;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =true;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Billing(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =true;
        this.isDocs        =false;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =true;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Docs(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =true;
        this.isAlerts      =false;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }
    Alerts(){
        this.isTimeline    =false;
        this.isOverview    =false;
        this.isSites       =false;
        this.isTasks       =false;
        this.isDeliverables=false;
        this.isActions     =false;
        this.isExpenses    =false;
        this.isReview      =false;
        this.isBilling     =false;
        this.isDocs        =false;
        this.isAlerts      =true;

        this.isProjectSummary     =false;
        this.isSiteSummary        =false;
        this.isDeliverableSummary =false;
        this.isTasksSummary       =false;
        this.isActionSummary      =false;

        this.isReviewPending  =false;
        this.isReviewArchives =false;

        this.isWIP     =false;
        this.isBilled  =false;
        this.isInvoice =false;

        this.isTaskGV =false;
        this.isTaskCV =false;
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
      if (node.data['breadcrumb']) {
          if (node.url.length) {
              let urlSegments: UrlSegment[] = [];
              node.pathFromRoot.forEach(routerState => {
                  urlSegments = urlSegments.concat(routerState.url);
              });
              let url = urlSegments.map(urlSegment => {
                  return urlSegment.path;
              }).join('/');
              this.breadcrumbs.push({
                  name: node.data['breadcrumb'],
                  url: '/' + url
              })
          }
      }
      if (node.firstChild) {
          this.parseRoute(node.firstChild);
      }
    }
    ngOnInit() {

        
    }
  checkUrl(type) {
    if(this.router.url != '/salesglobal/marketing/prospects/dashboard/qualification' && this.router.url != '/salesglobal/marketing/prospects/dashboard/opportunities' && this.router.url != '/salesglobal/marketing/prospects/dashboard/meetings' && this.router.url != '/salesglobal/marketing/prospects/dashboard/leads' && this.router.url != '/salesglobal/marketing/prospects/dashboard/contacts' && this.router.url != '/salesglobal/marketing/prospects/dashboard/alerts') {
        if(type == 'class')
            return 'active-prosp-link';
        else    
            return true;
    }
  }

}
