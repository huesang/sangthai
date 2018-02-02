import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { User } from "../model/user";
import { Array_user } from "../model/model-user";


@Injectable()
export class FormService {
  user:User=new User();
  show_form=true;
  constructor(private location:Location,private http:HttpClient) {
    if(typeof localStorage.user != 'undefined'){
      this.user=JSON.parse(localStorage.user); 
      this.show_form=false;
    }
  }
  checkLogin(){
    if(typeof localStorage.user != 'undefined'){
     return true
    }
    return false
  }
  checkAcount(user:User){
    for(var i in Array_user){
      let item=Array_user[i];
      if(item.email == user.email){
        if(item.password != user.password){
          return 'password';
        }else{
          this.user=Array_user[i];
          localStorage.user=JSON.stringify(Array_user[i]);
          //tat an form trong trang dang nhap
          this.show_form=false;
        }
        break;
      }else{
        if(Number(i)==Array_user.length-1){
          return 'email';
        }
      }
      
      
    } 
  }
  checkEmail(email,id=undefined):number{
    //kiem tra da ton tai email 
    let index=-1;
    for(var i in Array_user){
      if(id==Array_user[i].id){ continue }
      if(Array_user[i].email==email){
        index=Number(i);
        break;
      }
    }
    return index;
  }
  edit(user:User){
    for(var i in Array_user){
      let item=Array_user[i];
      if(item.id == user.id){
        let result_check=this.checkEmail(user.email,user.id);
        if( result_check !=-1){
          return 'Email đã tồn tại';
        }else{
          // Cập nhật data array user
          Array_user[i]=user;
          //gán lại cho service.user
          this.user = Object.assign({}, user);
          //luu session
          localStorage.user=JSON.stringify(this.user);
        }
        break
      } 
    }
  }
  register(user:User){
    if(this.checkEmail(user.email) != -1){
      return 'Email này đã tồn tại'
    }else{
      user.id=(Number(Array_user[Array_user.length-1].id)+1).toString();
      Array_user[Array_user.length]=user;
      //gán lại cho service.user
      this.user=user;
      //luu session
      localStorage.user=JSON.stringify(this.user);
      //tat an form trong trang dang ky
      this.show_form=false;
    }
  }
  signOut(){
    console.log('sign out');
    this.user=new User();
    localStorage.removeItem('user');
    //tat an form trong trang dang nhap
    this.show_form=true;
    //quay ve trang cũ
    this.location.back();
    
  }
}
