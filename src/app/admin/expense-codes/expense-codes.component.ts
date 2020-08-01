import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { AddExpenseCodeDialogComponent } from './add-expense-code-dialog/add-expense-code-dialog.component';

@Component({
  selector: 'app-expense-codes',
  templateUrl: './expense-codes.component.html',
  styleUrls: ['./expense-codes.component.scss']
})
export class ExpenseCodesComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  public OpenAddExpenseCodeDialog() {
    let dialogRef = this.dialog.open(AddExpenseCodeDialogComponent, {
        height: 'auto',
        width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
        if (oppurtunity) {
            // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
        }
    });
}
  Expensecodes = [
    {expenseCode:"Fuel Charges",type:'CAD / kilometer ($ / km)',rate:"0.25",status:true},
    {expenseCode:"Breakfast",type:'CAD ($)',rate:"12",status:true},
    {expenseCode:"Lunch",type:'CAD ($)',rate:"15",status:true},
    {expenseCode:"Sundry Expenses",type:'Open',rate:"-",status:true},
 ];
}
