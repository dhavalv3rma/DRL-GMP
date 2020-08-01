import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { PrimeDragulaDirective } from './prime-dragula.directive';
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
  selector: 'app-sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SequencesComponent implements OnInit {

  bag:any;

  // constructor() { }

  ngOnInit() {
  }

  // tableList: Object[] = [
  //   { intStatusId: 1, sequence: 'Marketing - Template 1', steps_count: 6, status: 'Active' },
  //   { intStatusId: 2, sequence: 'Sales - Template 1', steps_count: 4, status: 'Inactive' },
  // ];

   itemstr: HTMLElement[] = [];
   str: HTMLElement = <HTMLElement>document.getElementById("new_text");
   copy() {
     this.itemstr.push(this.str)
   }

   remove(e) {
     document.getElementById("repeat-" + e).remove();
   }


  // @Input() column: Array<EditableTableColumn> = [];
  // @Input() rows: RowValue[] = [];

  // columns = [
  //   {
  //     header: 'Step Name',
  //     field: 'description',
  //     style:'text-align:left',
  //     type: 'text',
  //     required: true,
  //   },
  //    {
  //     header: 'Step',
  //     field: 'Steps',
  //     style:'text-align:left',
  //     type: 'checkbox',
  //     defaultValue: true,
  //   }, 
  //   {
  //     header: 'Sequence',
  //     field: 'Sequence',
  //     style:'text-align:left',
  //     type: 'checkbox',
  //     defaultValue: true,
  //   }, 
  //   {
  //     header: 'Status',
  //     field: 'Status',
  //     style:'text-align:left',
  //     type: 'text',
  //     defaultValue: true,
  //   }
  // ];
  // rowData: any ;
  // constructor() { }

  // ngOnInit() {
  //   this.rows = [
  //     { description: 'Qualification ', Steps: true, Sequence: false, Status: 'Active', display: true },
  //     { description: 'Initial Sequence', Steps: true, Sequence: false, Status: 'Inactive', display: true },
  //     { description: 'Conversation ', Steps: false, Sequence: true, Status: 'Active', display: true },
  //     { description: 'Mature Sequence', Steps: true, Sequence: false, Status: 'Active', display: false },
  //     { description: 'Opportunity ', Steps: false, Sequence: true, Status: 'Inactive', display: true },
  //   ];
  // }
  // onRowSave(z) {
  // }
  // onRowCancel(z) {
  // }
}
