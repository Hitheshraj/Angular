import { Component, OnInit } from '@angular/core';
import { Medicine } from '../interface/medicine';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  medicineAdded: boolean = false;
  name: String;
  email: string = sessionStorage.getItem('adminEmail');

  dbMedicine: Medicine = {
    id: null,
    name: '',
    price: 0,
    seller: undefined,
    description: undefined,
    active: false,
  };
}
