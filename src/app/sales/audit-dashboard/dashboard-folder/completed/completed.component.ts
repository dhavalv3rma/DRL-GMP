import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],encapsulation: ViewEncapsulation.None,
})
export class CompletedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  //tableList: any;

  ngOnInit() {
  }

   changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
            let csv: string = reader.result as string;
            console.log(csv);
         }
      }
  }

  tableList: Object[] = [
    { intlistId: 1,name: 'Building & Infra', count:4, status:true},
    { intlistId: 2,name: 'Drainage', count:5, status:true},
    { intlistId: 3,name: 'Building-Internal', count:4, status:true},
    { intlistId: 4,name: 'Gantries & Pipe Bridge', count:5, status:true},
    { intlistId: 5,name: 'Pipe work', count:4, status:true},
    { intlistId: 6,name: 'Roads & Supporting Utility Sheds', count:5, status:true},
    { intlistId: 7,name: 'Utilities-CT', count:4, status:true},
    { intlistId: 8,name: 'Utilities-Chillers', count:5, status:true},
    { intlistId: 9,name: 'Utilities-Chimney', count:4, status:true},
    { intlistId: 10,name: 'Electrical Infra', count:5, status:true},
    { intlistId: 11,name: 'Maintenance System', count:4, status:true},
    { intlistId: 12,name: 'Compressed air & N2', count:5, status:true},
  ];

  // public openUserDialog(id) {
  //   let dialogRef = this.dialog.open(AddCheckListDialogComponent, {
  //       data: id,
  //       height: 'auto',
  //       width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  deleteLookup() {
    //this.alertService.createAlert('Successfully deleted.', 1);
    this.dialog.closeAll();
  }

}
