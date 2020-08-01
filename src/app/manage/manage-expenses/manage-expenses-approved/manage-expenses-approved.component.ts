import { Component, OnInit } from '@angular/core';

export interface ExpensesData {
  id:number;
  isSelected: boolean;
  columns: string;
  partyChief: string;
  fieldAssistant: string;
  validatedby: string;
  amount: number;
  isApproved: boolean;
  isDeclined: boolean;
  subject:string;
  role:string;
  tillDateAmount:number
}
const Expenses: ExpensesData[]=[
  {id:1,tillDateAmount:250,subject:'Expense for journey',role:'Field Assistant',isSelected:false,columns:'City Homes >> 4-24642 >> 71 Mearns / 249 >> Development >> Prepare and maintain sketches',partyChief:'Jhon Cena',fieldAssistant:'Tim Root',validatedby:'Chris Morris',amount:50,isApproved:true,isDeclined:false},
  {id:2,tillDateAmount:300,subject:'Vehicle diesel',role:'Field Assistant',isSelected:false,columns:'Delpark >> 4-82324 >> 71 Mearns Ct 20 >> Development >> Verify the accuracy of survey data',partyChief:'Robert Smith',fieldAssistant:'David Smith',validatedby:'Maria Rodriguez',amount:34,isApproved:true,isDeclined:false},
  {id:3,tillDateAmount:275,subject:'Miscellaneous',role:'Quote Admin',isSelected:false,columns:'Hydro One >> 6-10235 >> 20 Mearns Ct >> Development >> To establish legal boundaries for properties',partyChief:'Maria Garcia',fieldAssistant:'Mary Smith',validatedby:'Maria Hernandez',amount:15,isApproved:true,isDeclined:false},
  {id:4,tillDateAmount:200,subject:'Tools purchased',role:'Party Chief',isSelected:false,columns:'City Pickering >> 2-51152 >> Site 4 >> Development >> Supervise preparation of all data, charts, plots, maps, records, and documents ',partyChief:'Maria Martinez',fieldAssistant:'James Johnson',validatedby:'Chris Morris',amount:55,isApproved:true,isDeclined:false},
] 

@Component({
  selector: 'app-manage-expenses-approved',
  templateUrl: './manage-expenses-approved.component.html',
  styleUrls: ['./manage-expenses-approved.component.scss']
})
export class ManageExpensesApprovedComponent implements OnInit {

  dataSource = Expenses;
  constructor() { }

  ngOnInit() {
  }

}
