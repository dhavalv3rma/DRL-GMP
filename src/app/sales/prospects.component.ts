import { Component, ChangeDetectorRef, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProspectsDialogComponent } from './add-prospects-dialog/add-prospects-dialog.component';
import { AddNoteDialogComponent } from '../shared/add-note-dialog/add-note-dialog.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../shared/services/alert.service';
@Component({
    selector: 'app-prospects',
    templateUrl: './prospects.component.html',
    styleUrls: ['./prospects.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AlertService]
})
export class ProspectsComponent {
    filterToggle: boolean = false;
    public dateTime1: Date;
    constructor(private alertService: AlertService,private ref: ChangeDetectorRef, public dialog: MatDialog, private route: ActivatedRoute, private router: Router, ) {
    }
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
    bdOptions = ["Rohin", "K.Sai", "Srinu", "P.Siva"];
    bdOptionSelected: any;

    onBdOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    public openprospectsDialog(prospects) {
        let dialogRef = this.dialog.open(AddProspectsDialogComponent, {
            data: prospects,
            height: 'auto',
            width: '600px',
        });

        dialogRef.afterClosed().subscribe(prospects => {
            if (prospects) {
            }
        });
    }
    localData: any[] = [
        { id:"kanban_table_1", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Research  (2)', data : [{ id: 'kanban_item_1161', name: 'SRPR', info: 'Updates: 5', colorCode: 'Green', percentage: '70%',campaign: 'City Homes | Dwayne',projectcode:"5-12758 | 71 Mearns Ct", actions: 'Actions: 8/10',budget: 'Budget: $ 560/800',tasks:'Tasks: 56/100',duedate:'Due Date: 17-May-2019', hex: '#FFFFFF'}, 
        { id:'kanban_item_1163', name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectcode:"4-24654 | 1486 Mearns ", actions: 'Actions: 8/10',budget: 'Budget: $ 560/800',tasks:'Tasks: 57/100',duedate:'Due Date: 26-May-2019',percentage: '94%', hex: '#FFFFFF'}]},
        { id:"kanban_table_2", style:{'background-color':'rgb(194, 220, 243)'}, stage:'Field', header: 'Field (1)', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',percentage: '85%', campaign: 'Hydro One | Dave',projectcode:"5-35135 | Mearns Ave", actions: 'Actions: 6/10',budget: 'Budget: $ 542/700',tasks:'Tasks: 59/100',duedate:'Due Date: 19-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_3", style:{'background-color':'rgb(213, 240, 263)'}, stage:'Calculations', header: 'Calculations (1)', data : [{ id: 'kanban_item_1166', name: 'TRPR', info: 'Updates: 6', colorCode: 'Green',percentage: '75%', campaign: 'Sandbank | Dwayne',projectcode:"6-26846 | Mearns avt", actions: 'Actions: 9/10',budget: 'Budget: $ 652/750',tasks:'Tasks: 78/100',duedate:'Due Date: 20-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_4", style:{'background-color':'rgb(204, 230, 253)'}, stage:'Drafting', header: 'Drafting (0)', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',percentage: '88%', campaign: 'Valleymede | Dave',projectcode:"7-12584 | 256 Street ", actions: 'Actions: 7/10',budget: 'Budget: $ 425/650',tasks:'Tasks: 85/100',duedate:'Due Date: 18-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_5", style:{'background-color':'rgb(213, 240, 263)'}, stage:'Quality Control', header: 'Quality Control (1)', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',percentage: '80%', campaign: 'AECOM | Dwayne',projectcode:"2-15874 | 61 Mearns Ct", actions: 'Actions: 9/10',budget: 'Budget: $ 752/900',tasks:'Tasks: 66/100',duedate:'Due Date: 27-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_6", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Archived', header: 'Archived (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Completed', header: 'Completed (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Cancelled', header: 'Cancelled (0)', data : []}
    ];
    draggedItem: any;
    ngOnInit() {
    }
    dragStart(event,item, sourceKanbanId) {
        this.draggedItem = item;
        this.draggedItem.kanbanId = sourceKanbanId;
    }
    drag(item) {
        document.getElementById(item.id).style.display="none";
    }
    drop(event) {
        if(this.draggedItem && this.draggedItem.kanbanId && event.path[0]['id']) {
            this.moveItem(this.draggedItem,event.path[0]['id']);
            this.draggedItem = null;
        }
    }
    dragEnd(event,item) {
        document.getElementById(item.id).style.display="table-row";
        this.draggedItem = null;
    }
    moveItem(draggedItem, kanbanId) {
        console.log(draggedItem);
        for(let i = 0; i < this.localData.length; i++) {
            if(kanbanId === this.localData[i].id) {
                if(i%2 === 0) {
                    draggedItem.hex = '#FFFFFF';
                } else {
                    draggedItem.hex = '#E0E0E0';
                }
                this.localData[i].data.push(draggedItem);
                this.localData[i].header = this.localData[i].stage + ' ('+this.localData[i].data.length+')';
            }
            if(draggedItem.kanbanId === this.localData[i].id) {
                var temp = this.localData[i].data;
                for(let j=0; j < temp.length; j++) {
                    if(temp[j].id === draggedItem.id) {
                        this.localData[i].data.splice(j,1);
                        this.localData[i].header = this.localData[i].stage + ' ('+this.localData[i].data.length+')';
                    }
                }
            }
        }
    }
    public openNewUpdate(id) {
        let dialogRef = this.dialog.open(AddNoteDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }
    public openConfirmDialog(action,value,name) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data:{'action':action,'value':value,'name':name}
        });
    
        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }

}
