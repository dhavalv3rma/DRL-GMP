import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
        this.settings = this.appSettings.settings;
        this.description = {
            "Dashboard": "Progress of the active audits are provided on this screen.",
            "Analytics": "Central quality audits are provided on this screen",
            "Dashboards": "This is a summary dashboard of the entire system.vxcvxcvxvxvxc",
            "Alerts": "The alerts as reminders for the Marketing and Sales process can be viewed from here.",
            "Quotes": {
                'Grid View': "This is the core screen where the list of quotes can be managed.",
                'Map View': "All the locations of th quotes can be vie from here."
            },
            "Scheduling": {
                'Assets': {
                    'Manage Assets': 'All the assets can be configured and managed from here.',
                    'Schedule Assets': 
                   { 
                        'Grid View': 'All the scheduled assets can be viewd from here.',
                        'Calendar View': "This is the actual schedule screen, which dispalys all the asset schedules." 
                    }
                   // 'Grid View': 'All the scheduled assets can be viewd from here.',
                   //    'Calendar View': "This is the actual schedule screen, which dispalys all the asset schedules." 
                }
            },
            "Master Data": {
                'Job Codes': "Job codes can be configured and managed from here.",
                'Expense Codes': "Expense codes can be configured and managed from here.",

                'Asset Categories': 'Asset Categories can be configured and managed from here.',
                'client Categories': 'Client Categories can be configured and managed from here.',
                "client Types":"Here is the place to configure and manage client types.",
                "Survey Types":"Here is the place to configure and manage survey types.",
                "Lead Sources":"Here is the place to configure and manage lead sources."

            },
            "Master List": {
                'Municipalities': "All the municipalities can be configured and managed from here.",
                'Potential Levels': 'All the potential levels can be configured and managed from here.',
            },
            "Settings": {
                "Lookup Options": "Lookup Options can be configured and managed from here.",
                "Preferences": "Here the default settings can be managed for the whole of the applciation.",
            },
            "Depts & Sections": {
                "Depart": "Departments can be configured and managed from here.",
                "Sections": "Sections can be configured and managed from here.",
            },

            "Best Practices": "Best practices screen",
            "Overdue Alerts": "Overdue alerts along with reason for delay if available are logged in this screen. Note, these alerts are specific to a staff or a task.",
            "Calendar": "List of tasks scheduled for selected project can be viewed and managed from this screen. Also, summary details of selected task, staff and assets can be viewed here.",
            "Clients": "This is a screen where the list of clients can be managed.",
            "Projects": "This is the core screen where the list of projects and all project activity can be managed.",
            "Project Dashboard": "Activities that are carried on selected project can be viewed and managed.",
            "Tasks": "List of tasks and sub tasks associated to selected project can be viewed and managed from this screen.",
            //"Steps": "The flow of the Marketing and Sales process can be defined in terms of templates.",


            "Referral": 'Potential business from the existing customers can be managed here.',
            "Calenda": 'List of meetings scheduled are highlighted in this page.',
            "Expenses": 'Expenses screen is used to screen the list of validated expenses and group them by person or periods in order to take payment decisions.  Multiple expenses can be selected at a time for bulk approval.  Claims may be declined with remarks in some cases.',
            "Users": "This page is used to manage users",
            "Audits": "This page is used to manage audits",
            "Permissions": "This page is used to manage user permissions",
            "Contacts": "This is a screen where the list of contacts can be managed.",
            "Job Codes": "This page is used to manage the job codes",
            "Client Categories": "Client Categories can be managed in this page",
            "Predictability": "Predictability page is under Construction",
            "Productivity": "Productivity page is under Construction",
            "Billing": "Billing page is under Construction",
            "Timeline": " The data for the Projects gets highlighted based on the selected tab.",
            "Assets": " All the assets scheduling can be managed from here.",
            "Availability": "Staff availability can be managed from here.",
            "Action Calendar":"List of pending actions can be managed here.",
        

            

            "Prospect Dashboard": {
                "TIMELINE": " The data for the Prospects gets highlighted based on the selected tab.",
                "SEQUENCE": " The data for the Prospects gets highlighted based on the selected tab.",
                "NOTES": " The data for the Prospects gets highlighted based on the selected tab.",
                "EMAILS": " The data for the Prospects gets highlighted based on the selected tab.",
                "MESSAGES": " The data for the Prospects gets highlighted based on the selected tab.",
                "LINKEDIN": " The data for the Prospects gets highlighted based on the selected tab.",
                "CALLS": " The data for the Prospects gets highlighted based on the selected tab.",
                "OPPORTUNTIES": " The data for the Prospects gets highlighted based on the selected tab.",
                "LEADS": " The data for the Prospects gets highlighted based on the selected tab.",
                "CONTACT": " The data for the Peojects gets highlighted based on the selected tab.",
                "MEETINGS": " The data for the Prospects gets highlighted based on the selected tab.",
                "ALERTS": " The data for the Prospects gets highlighted based on the selected tab.",
                "QUALIFICATION": "The data for the Prospects gets highlighted based on the selected tab.",
            },
            "Task Manager": {
                "OPPORTUNTIES": 'Realtime updates in the opportunities list and the alerts are highlighted here.',
                "PROSPECTS": 'Realtime updates in the prospects list and the alerts are highlighted here.'
            },
            "Kanban": {
                "OPPORTUNTIES": 'Customize  Quotes/Projects steps as per the requirement',
                "PROSPECTS": 'Customize  audit steps as per the requirement'
            },
            'Reports': 'This page is used to create a checklist for qualification of prospect.',
            'Color Code': 'This page is used to manage  the color code',
            'Manage': 'This',
            'Time Zones': 'This page is used to manage timezones',
            'Locations': 'This page is used to manage locations',
            'Manage Roles': 'This page is used to manage roles',
            'Expense Account': 'List of expense accounts is setup here',
            'Service Levels' : 'This page is used to manage service levels',
            'Audit Trail':'Comprehensive log off all events and actions in the system available here.',
            'Configure Kanban': 'List of KANBAN steps for quotes and projects process is setup here',
            'Quick Books Setup': 'List of mapping configurations required to interface with Quick Books appears here',
            'Announcements': 'Administrator can publish announcements to users by role over here and choose delivery modes like email or text or push notification',
            'Projects Review': 'All the projects can be reviewed from here.',
            'Audit Dashboard' : 'Individual Audit history can be tracked here',
            'Summary Report': 'Cross Audit analysis and Annual Report can be generated on this screen',
            'Class Codes':'This page is used to manage class codes',
            'Categories' : 'This page is used to manage categories',
            'Sub-Categories' : 'This page is used to manage sub-categories',
            'Agenda Template' : 'This page is used to manage agenda templates',
            'Checklist Template' : 'This page is used to manage checklist templates',
            //'Depts & Sections' : 'This page is used to manage Depts and Sections' 
            // 'Overdue Alerts': 'Overdue alters can be viewed from here',




            // "Users": {
            //     "Users": "This page is used to manage Users.",
            //     "Permissions": "This page is used to manage permissions."
            // }

        };
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' | ' + breadcrumb.name;
                })
                this.pageTitle ? null : this.pageTitle = " | Dashboard";
                //console.log(this.pageTitle);
                var temp = this.pageTitle.split(' | ');
                if (temp.length > 4) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 3) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else {
                    this.moduleTitle = temp.pop();
                }
                //console.log(this.moduleTitle);
                //console.log(this.subTitle);
                if (this.subTitle === 'Permissions') {
                    this.moduleTitle = "Permissions";
                    this.subTitle = "test";
                }
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })
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

    public closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}


