import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/AccountService';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers:[AccountService],
})
export class AccountsComponent implements OnInit {
  accounts:{name:string;status:string}[]=[
    // {
    //   name:'Savings account',
    //   status:'active'
    // },
    // {
    //   name:'Debit account',
    //   status:'inactive'
    // },
    // {
    //   name:'Credit account',
    //   status:'active'
    // },
  ];
  constructor(private accountService:AccountService) { 
    this.accounts=this.accountService.accounts;
  }

  ngOnInit(): void {
  }
  // onAccountAdded(newAccount:{name:string,status:string}){
  //   this.accounts.push(newAccount);
  // }
}
