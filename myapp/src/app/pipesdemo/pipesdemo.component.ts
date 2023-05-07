import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  servers = [
    {
      serverSize: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date('2022-04-20'),
    },
    {
      serverSize: 'large',
      name: 'Database Server',
      status: 'stable',
      started: new Date('2022-01-23'),
    },
    {
      serverSize: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date('2022-11-2'),
    },
    {
      serverSize: 'small',
      name: 'QA Server',
      status: 'critical',
      started: new Date('2022-06-18'),
    },
  ];

  filterStatus='';
  //Giving background color
  getStatusClass(server){
    return{
      'list-group-item-success':server.status=='stable',
      'list-group-item-warning':server.status=='offline',
      'list-group-item-danger':server.status=='critical',

    }
  }
}
