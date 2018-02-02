import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from "../form.service";
import { User } from "../../model/user";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../form.css']
})
export class SignInComponent implements OnInit {
  constructor(public formService:FormService, private router :Router, private location: Location) { }
  user:User=new User();
  ngOnInit() {}
  signIn(signInForm:NgForm){
    let err=this.formService.checkAcount(this.user);
    switch (err) {
      case 'email': 
        signInForm.form.controls.email.setErrors({'incorrect': true});
        break;
      case 'password':
        signInForm.form.controls.password.setErrors({'incorrect': true});
      break;
    }
  }
  goback(){
    this.location.back(); 
  }
}
