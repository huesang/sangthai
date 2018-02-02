import { Component, OnInit } from '@angular/core';
import { User } from "../../model/user";
import { NgForm } from '@angular/forms';
import { FormService } from "../form.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['../form.css']
})
export class FormMenuComponent implements OnInit {
  user:User=new User();
  constructor(public formService:FormService,private router:Router) {}

  ngOnInit() {
  }
  signIn(signInForm:NgForm){
    if(signInForm.value.email==''){
      this.router.navigate(["/signIn"]);
    }else{
      let err=this.formService.checkAcount(this.user);
      console.log('menu '+err);
      switch (err) {
        case 'email':
          signInForm.form.controls.email.setErrors({'incorrect': true});
          break;
        case 'password':
        signInForm.form.controls.password.setErrors({'incorrect': true});
        break;
        case undefined:
          this.router.navigate(["/signIn"]);
        break;
      }
    }
  }
  register(registerForm:NgForm){
    if(registerForm.value.email==''){
      this.router.navigate(["/register"]);
    }else{
      let err=this.formService.register(this.user);
      console.log(err);
      if(err!=undefined){
        registerForm.form.controls.email.setErrors({isset_email:true});
      }else{
        this.router.navigate(["/register"]);
      }
    }
  }

}
