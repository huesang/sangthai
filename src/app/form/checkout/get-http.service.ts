import { Injectable } from '@angular/core';
//import { Headers, Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
@Injectable()
export class GetHttpService {
  private url="https://thongtindoanhnghiep.co/api/city";
  data:any;
  constructor(private http:HttpClient) {
    
  }
  getCity(){
    this.http.get(this.url).subscribe(data=>{
      console.log(data);            
    })
    
    // data.subscribe((x)=>{
    //  console.log(x) 
    // })
  }
}
