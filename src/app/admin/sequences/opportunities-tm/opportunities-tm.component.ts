import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddStepDialogComponent } from '../add-step-dialog/add-step-dialog.component';
import { MatDialog } from '@angular/material';
import { SelectItem } from 'primeng/primeng';
import { PrimeDragulaDirective } from '../prime-dragula.directive'
import { AlertService } from '../../../shared/services/alert.service';

import {
  Input,
  Output,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  OnChanges,
} from '@angular/core';
export class EditableTableColumn {
  header: string;
  field: string;
  type: 'text' | 'checkbox';
  required?: boolean;
  defaultValue?= '';
}
type RowValue = any;

@Component({
  selector: 'app-opportunities-tm',
  templateUrl: './opportunities-tm.component.html',
  styleUrls: ['./opportunities-tm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class OpportunitiesTmComponent implements OnInit {
    bag:any;
    ngOnInit() {
      this.rows = [
        { description: 'Opportunity ', descriptions:'Note', Status: true, display: true },
        { description: 'Parallel Project', descriptions:'Note', Status: true, display: true },
        { description: 'Prototype', descriptions:'Sequence', Status: true, display: true },
        { description: 'Proposal', descriptions:'Sequence', Status: true, display: false },
        { description: 'Final Sequence', descriptions:'Note', Status: false, display: true },
        { description: 'Feedback', descriptions:'Sequence', Status: true, display: true },
        { description: 'Real Project', descriptions:'Note', Status: true, display: false },
      ];
    }
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
    deleteUser(elementValues){
      console.log(elementValues);
      }
    columns = [
      {
        header: 'Step Name',
        field: 'description',
        style:'text-align:left',
        type: 'Move',
        required: true,
      },
      //  {
      //   header: 'Note',
      //   field: 'Steps',
      //   style:'text-align:left',
      //   type: 'checkbox',
      //   defaultValue: true,
      // }, 
      /* {
        header: 'Note/Sequence',
        field: 'descriptions',
        style:'text-align:left',
        type: 'text',
        defaultValue: true,
      },  */
      {
        header: 'Status',
        field: 'Status',
        style:'text-align:left',
        type: 'boolean',
        defaultValue: true,
      }
    ];
    rowData: any ;
    constructor(public dialog: MatDialog, private alertService: AlertService) {}
    @Input() column: Array<EditableTableColumn> = [];
  @Input() rows: RowValue[] = [];
  onRowSave(z) {
  }
  onRowCancel(z) {
  }

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddStepDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  saveStep() {
    this.alertService.createAlert('Successfully Saved.', 1);
  }

  deleteStep() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}