import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {
  genders=['Male','Female'];
  constructor() { }
  submitted=false; 

  ngOnInit(): void {
  }
  user={
    username:'',
    email:'',
    secret:'',
    gender:'',
  }
  onSubmit(form:NgForm){
    // console.log(form);//All the form object are available when we see in console
    // console.log(form.value);
    this.user.username=form.value.username;
    this.user.email=form.value.email;
    this.user.secret=form.value.secret;
    this.user.gender=form.value.gender;
    this.submitted=true;
    form.reset;
  }
}
