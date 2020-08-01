import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import * as frLocale from 'date-fns/locale/fr';
import { MatDialog } from '@angular/material';
import { DatepickerOptions } from 'ng2-datepicker';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KanbanComponent {

    hrefid: any;
    filterToggle: boolean = false;
    public dateTime1: Date;
    //screenWidth:any;
    constructor(private ref: ChangeDetectorRef, public dialog: MatDialog, private route: ActivatedRoute, private router: Router, ) {
        //this.onResize();
    }

    /* onResize() {
        this.showScrolls = window.innerWidth < 1024 ? true : (this.columns.length > 7 ? true : false);
    } */

    @ViewChild('myKanban') myKanban: jqxKanbanComponent;
    //@HostListener('window:resize', ['$event'])
    theme: any;

    color = [189, 215, 238, 0];

    options: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        dayNamesFormat: 'dd',
        firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
        locale: frLocale,
        minDate: new Date(Date.now()), // Minimal selectable date
        maxDate: new Date(Date.now()),  // Maximal selectable date
        barTitleIfEmpty: 'Click to select a date',
        placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
        addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
        addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
        fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
        useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
    };

    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;

    onColorOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }


    monthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthOptionSelected: any;

    onMonthOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }


    yearOptions = [2015, 2016, 2017, 2018];
    yearOptionSelected: any;

    onYearOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }




    locationOptions = ["Canada", "India", "USA", "United Kingdom"];
    locationOptionSelected: any;

    onLocationOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    campaignOptions = ["TDR","CEO","Startup","CV","Audit Automation","F2O","Venue Management"];
    campaignOptionSelected: any;

    onCampaignOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

    openModal:any
    bdOptions = ["Rohin", "K.Sai", "Srinu", "P.Siva"];
    bdOptionSelected: any;

    onBdOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    modeOptions = ["Email","Call","Text Messages","Notes","Sequences","Linkedin"];
modeOptionSelected: any;
//startDate = new Date(1990, 0, 1);
onModeOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
communicationOptions = ["Incoming","Outgoing"];
communicationOptionSelected: any;
//startDate = new Date(1990, 0, 1);
onCommunicationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
    
    startDate = new Date(1990, 0, 1);
    // public openprospectsDialog(prospects) {
    //     let dialogRef = this.dialog.open(AddProspectsDialogComponent, {
    //         data: prospects,
    //         height: 'auto',
    //         width: '600px',
    //     });

    //     dialogRef.afterClosed().subscribe(prospects => {
    //         if (prospects) {
    //             // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
    //         }
    //     });
    // }


    fields: any[] =
        [
            { name: 'id', type: 'string' },
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'campaign', type: 'string' },
            { name: 'abcd', map: 'dsds', type: 'string' },
            { name: 'content', map: 'colorCode', type: 'string' },
            { name: 'tags', map: 'lead', type: 'string' },
            { name: 'className', map: 'info', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
           
            { name: 'resourceId', type: 'number' }
        ];

    source: any =
        {
            localData: [
                { id: '1161', state: 'qualification', info: 'Updates:5', colorCode: 'Green', campaign: 'Ram Gupta | Ameerpet', lead: 'Agenda - 10/30', dsds: 'sadfasd', hex: '#FFFFFF', resourceId: 1 },
                { id: '1645', state: 'init_seq', info: 'Updates:5', colorCode: 'Blue', campaign: 'Sriram | Bachupally', lead: 'Agenda - 15/25', hex: '#E0E0E0',dsds:'sadfasd', resourceId: 2 },
                { id: '9213', state: 'conversation', info: 'Updates:5', colorCode: 'Grey', campaign: 'Rahul | Bahadurpally', lead: 'Agenda - 11/22', hex: '#FFFFFF',dsds:'sadfasd', resourceId: 3 },
                { id: '6546', state: 'qualification', info: 'Updates:5', colorCode: 'Red', campaign: 'Shantaram | Ibrahimpatnam', lead: 'Agenda - 2/18', hex: '#FFFFFF',dsds:'sadfasd', resourceId: 4 },
                { id: '9034', state: 'mat_seq', info: 'Updates:5', colorCode: 'Blue', campaign: 'Keshav | Begumpet', lead: 'Agenda - 14/62', hex: '#E0E0E0',dsds:'sadfasd', resourceId: 5 }
            ],
            dataType: 'array',
            dataFields: this.fields
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);


    resourcesAdapterFunc = (): any => {
        let resourcesSource =
        {
            localData:
                [
                    { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/angular/jqwidgets/styles/images/common.png', common: true },
                    { id: 1, name: 'FTO - 1', image: '../../../assets/img/app/stethoscope.png' },
                    { id: 2, name: 'CTO - 3', image: 'https://www.jqwidgets.com/angular/images/janet.png' },
                    { id: 3, name: 'CTO - 4', image: '../../../assets/img/app/manufacturing.jpg' },
                    { id: 4, name: 'FTO - 2', image: 'https://www.jqwidgets.com/angular/images/nancy.png' },
                    { id: 5, name: 'CTO - 3', image: 'https://www.jqwidgets.com/angular/images/Michael.png' },
                    { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/angular/images/margaret.png' },
                    { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/angular/images/robert.png' },
                    { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Laura.png' },
                    { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Anne.png' }
                ],
            dataType: 'array',
            dataFields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'image', type: 'string' },
                    { name: 'common', type: 'boolean' }
                ]
        };
        let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }

    columns: any[] =
        [
            { text: 'Scheduled', dataField: 'qualification', maxItems: 5, collapsible: false },
            { text: 'Initiated', dataField: 'init_seq', maxItems: 5, collapsible: false },
            { text: 'Completed', dataField: 'conversation', maxItems: 5, collapsible: false },
            { text: 'Audit Report', dataField: 'archive', maxItems: 5, collapsible: false },
            { text: 'CAPA', dataField: 'potential', maxItems: 5, collapsible: false },
            { text: 'Auditee Response', dataField: 'mat_seq', maxItems: 5, collapsible: false },
            { text: 'Auditor Remarks', dataField: 'opportunity', maxItems: 5, collapsible: false },
            { text: 'Action Plan', dataField: 'potential', maxItems: 5, collapsible: false },
            { text: 'Audit Closed', dataField: 'mat_seq', maxItems: 5, collapsible: false },
            //{ text: 'Opportunity', dataField: 'opportunity', maxItems: 5, collapsible: false }
        ];

    showScrolls:boolean =   true;

    template: string =
        '<div class="jqx-kanban-item" id="">'
        + '<div class="jqx-kanban-item-color-status"></div>'
        + '</div>';

    columnRenderer = (element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            if (this.columns.length > this.color[3]) {
                let ids = column.headerElement[0]['id'].split('-');
                document.getElementById(ids[0] + '-column-container-' + ids[3]).style.backgroundColor = 'rgb(' + this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ')';
                this.color[0] += 5;
                this.color[1] += 5;
                this.color[2] += 5;
                this.color[3] += 1;
            }
            let elementHeaderStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            let collapsedElementHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];

            let columnItems = this.myKanban.getColumnItems(column.dataField).length;

            elementHeaderStatus.innerHTML = ' (' + columnItems + ')';
            collapsedElementHeaderStatus.innerHTML = ' (' + columnItems + ')';
        }
    };

    itemRenderer = (element: any, item: any, resource: any): void => {
        console.log(item);
        //let temp = this.source.localData;
        //for(var i=0; i< temp.length; i++) {
        //if(item['id'] == temp[i]['id']) {
        //console.log(item);
        let itemTemplate = '<span><a class="res-name"  id="resname" target="_blank" href="/#/salesglobal/marketing/prospects/dashboard">' + resource.name + '</a>&nbsp;&nbsp</span><span class="change-icon" data-toggle="popover" title="Popover title" data-content="And heres some amazing content. Its very engaging. Right?"><i class="fa fa-circle dot '+item.content+'"></i> <i class="fa fa-chevron-circle-down dot dot-arrow '+item.content+'"></i></span> <br>'
            + '<span class="cap-name"><b>' + item['text'] + '</b></span><br>'
            + '<span class="cap-name">' + item['tags'] + '</span><br>'
            + '<span class="cap-name"><b>Checklist</b> - 15/75</span><br>'
            + '<span class="cap-name"><b>CAPA</b> - 15/10/35</span><br>'
            + '<span class="cap-name"><b>Action Plan</b> - 15/21</span><br>'
            + '<span class="cap-name"><b>Audit Date</b> - 13/06/2019</span><br>'
            + '<span class="cap-name"><b>Closure Date</b> - 19/06/2019</span><br><br>';
            itemTemplate += '<span class="lead-name">Updated 3 days ago </span><br>';
            
            
            // if(item['className'] == 'Updates:5' ){
            //     this.hrefid="/#/salesglobal/marketing/comments";
            //     itemTemplate +='<a style="float:right" onClick = "openModal(null)" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>'
            // }
            // if(item['className']  == 'Sequence:5')  {
            //     this.hrefid="/#/salesglobal/marketing/commentsforsequence";
            //     itemTemplate +='<a style="float:right" onClick = "openPropModal(null);" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>'
            // }
            itemTemplate += '<br>';
            //this.hrefid="/#/salesglobal/marketing/commentsforsequence";
            itemTemplate += '<a class="info-card"> ' + item['className'] + '</a>';
            //itemTemplate += '<a class="info-card-next" >' + 'Leads:2' + '</a>';
            //itemTemplate += ' <a style="float:right" onClick = "openPropModal(event);" class="jqx-icon-plus-alt jqx-icon-plus-alt-arctic"></a>';
            //itemTemplate += '<a class="info-card" href= ' + this.hrefid + ' > ' + item['className'] +
            '  </a>';

        element[0].getElementsByClassName('jqx-kanban-item-color-status')[0].innerHTML = itemTemplate;
        //break;
        //}
        //}
    };

    scrollKanban(side) {
        var eleClass = document.getElementsByClassName('jqx-kanban-column')[0];
        var id = eleClass.id.split('-')[0];
        var ele = document.getElementById(id);
        if(side == 'left')
            ele.scrollLeft += 190;
        else
        ele.scrollLeft -= 190;
    }

    myKanbanOnItemAttrMoved(event: any): void {
        var args = event.args;
        console.log(args);
        if (args.newColumn.dataField == 'init_seq' || args.newColumn.dataField == 'mat_seq' || args.newColumn.dataField == 'archive') {
            let temp = args.itemData;
            temp['color'] = "#E0E0E0";
            temp['className'] = "Updates:5";
            delete temp['id'];
            this.myKanban.updateItem(args.itemId, temp);
        } else {
            let temp = args.itemData;
            temp['color'] = "#FFFFFF";
            temp['className'] = "Updates:5";
            delete temp['id'];
            this.myKanban.updateItem(args.itemId, temp);
        }
    };



    myKanbanItemAttrClicked(event: any): void {
        let args = event.args;
        if (args.attribute == 'colorStatus') {
            this.router.navigate(['/salesglobal/marketing/prospects/dashboard']);
        }
    };

    itemstr: HTMLElement[] = [];
    str: HTMLElement = <HTMLElement>document.getElementById("new_text");
    copy() {
        this.itemstr.push(this.str)
    }

    remove(e) {
        document.getElementById("repeat-" + e).remove();
    }

    saveSequence() {
        
    }

}
