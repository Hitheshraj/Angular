import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  serverId:number=1;
  serverStatus:string='offline';
  isServerEnabled:boolean=true;
  Servername:string='Server';
  serverDescription:string='Server Discription'//Two way binding

  getServerStatus(): string{
    return this.serverStatus;
  }
  onPowerButtonClick(){
    if(this.serverStatus=='offline'){
      this.serverStatus='online';
    } 
    else if (this.serverStatus=='online'){
      this.serverStatus='offline';
    }
  }
  getPowerLabel(){
    if(this.serverStatus=='online'){
      return "ON";
    }
    else if (this.serverStatus=='offline'){
      return "OFF";
    }
  }
  OnUpdateServerName(event:any){
    this.Servername=event.target.value;//Single binding
  }
  getcolor(){
    return this.serverStatus=='online' ? 'green':'red';
  }
  getServerClass(){
    return this.serverStatus=='online' ? 'btn-info' : 'btn-warning';
  }
}
