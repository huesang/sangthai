import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from "../form.service";
import { User } from "../../model/user";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../form.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  constructor(public formService:FormService) {}

  ngOnInit() {
  }
  register(registerForm:NgForm){
    let err=this.formService.register(this.user);
    if(err!=undefined){
      registerForm.form.controls.email.setErrors({isset_email:true});
    }
  }
}
