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
  selector: 'app-prospects-tm',
  templateUrl: './prospects-tm.component.html',
  styleUrls: ['./prospects-tm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class ProspectsTmComponent implements OnInit {
    bag:any;
    ngOnInit() {
      this.rows = [
        { description: 'Scheduled', descriptions:'Note', Status: true, display: true },
        { description: 'Initiated', descriptions:'Note', Status: true, display: true },
        { description: 'Completed', descriptions:'Sequence', Status: true, display: true },
        { description: 'Audit Report', descriptions:'Sequence', Status: false, display: true },
        { description: 'CAPA', descriptions:'Note', Status: true, display: true },
        { description: 'Auditee Response', descriptions:'Sequence', Status: true, display: true },
        { description: 'Auditor Remarks', descriptions:'Sequence', Status: true, display: true },
        { description: 'Action Plan', descriptions:'Sequence', Status: true, display: true },
        { description: 'Audit Closed', descriptions:'Sequence', Status: true, display: true },
        //{ description: 'Archived', descriptions:'Sequence', Status: true, display: true },
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
        header: 'Audit Step Name',
        field: 'description',
        style:'text-align:left',
        type: 'Move',
        required: true,
      },
       /* {
        header: 'Note/Sequence',
        field: 'descriptions',
        style:'text-align:left',
        type: 'text',
        defaultValue: true,
      },  */
      // {
      //   header: 'Sequence',
      //   field: 'Sequence',
      //   style:'text-align:left',
      //   type: 'checkbox',
      //   defaultValue: true,
      // }, 
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