import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from "../form.service";
import { User } from "../../model/user";
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['../form.css']
})
export class EditUserComponent implements OnInit {
  user:User=new User();
  update=false;
  constructor(public formService:FormService,private location:Location) {
    if(typeof localStorage.user == 'undefined'){
      //this.location.back(); 
    }else{
      this.user=JSON.parse(localStorage.user); 
    }
  }
  ngOnInit() {
    
  }
  edit(editForm:NgForm){    
    let err=this.formService.edit(this.user);  
    if(err==undefined){
      this.update=true;
    }else{
      this.update=false;
      editForm.form.controls.email.setErrors({'isset_email':true});
    }
  }
}
