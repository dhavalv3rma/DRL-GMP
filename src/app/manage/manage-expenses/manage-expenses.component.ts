import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-expenses',
  templateUrl: './manage-expenses.component.html',
  styleUrls: ['./manage-expenses.component.scss']
})
export class ManageExpensesComponent implements OnInit {

  constructor() { }
  isPending: boolean = true;

  filterToggle: boolean = false;

  ngOnInit() {
  }

}
