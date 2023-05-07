import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit {
  genders=['Male','Female'];
  constructor() { }

  singnupForm:FormGroup;
  
  forbidenUserNames=['admin','administrator','master','main'];

  ngOnInit(): void {
    this.singnupForm=new FormGroup({
      username:new FormControl(null,Validators.required,
        this.checkUserNames.bind(this)),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender:new FormControl('Male'),
    });
  }
  onSubmit(){
    console.log(this.singnupForm.value);
  }
  checkUserNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbidenUserNames.indexOf(control.value)>=0){
      return{nameIsForbiden:true};
    }
    return null;
  }
}
