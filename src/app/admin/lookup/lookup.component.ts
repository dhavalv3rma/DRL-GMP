import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss'],encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class LookupComponent implements OnInit {

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  deleteUser(elementValues){
    console.log(elementValues);
    }
    name:any;
  ngOnInit() {
  }
 
  tableList: Object[] = [
    { intLookupId: 2,code: 'User Type', options:'Admin, Staff,Role Owner, Bd'}
  ];

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
