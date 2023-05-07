import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';


@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }//account service is beeing injected

  ngOnInit(): void {
  }
  

  onCreateAccount(accountName:string,accountStatus:string){
    this.accountService.addAccount(accountName,accountStatus);
  }
}
