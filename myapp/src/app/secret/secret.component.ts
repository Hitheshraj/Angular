import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

logs=[];
showSecret:boolean;
ShowSecret(){
  this.showSecret=!this.showSecret;
  let datetime=new Date();
  this.logs.push("Button pushed at "+datetime.toLocaleTimeString());
}
onResetLogs()
{
  this.logs=[];
}

}
