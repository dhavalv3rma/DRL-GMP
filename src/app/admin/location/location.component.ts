import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service'
import { MatDialog } from '@angular/material';
import { AddLocationDialogComponent } from './add-location-dialog/add-location-dialog.component';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],encapsulation: ViewEncapsulation.None,
  providers:[AlertService]
})
export class LocationComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  deleteUser(elementValues){
    console.log(elementValues);
    }
    name:any;

  ngOnInit() {
  }
  tableList: Object[] = [
    { intLookupId: 1,location: 'Texas, Houston', country: 'US', state:'Texas', city:'Houston'},
    { intLookupId: 2,location: 'Washington, Seattle', country: 'US', state:'Washington', city:'Seattle'},
    { intLookupId: 3,location: 'Toronto, Canada', country: 'US', state:'Canada', city:'Toronto'},
    { intLookupId: 4,location: 'New York, USA', country: 'US', state:'New York', city:'New York'},
  ];
  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddLocationDialogComponent, {
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
