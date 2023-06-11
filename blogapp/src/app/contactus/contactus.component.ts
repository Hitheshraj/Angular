import { Component, Input, OnInit } from '@angular/core';
import { Medicine } from '../interface/medicine';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @Input()
  medicine: Medicine;
 
  isCart: boolean = false;


  isCatalog: boolean = true;

  isError: boolean = false;
  isSuccess: boolean = false;
  message: String;
  constructor() { }

  ngOnInit(): void {
  }

}
