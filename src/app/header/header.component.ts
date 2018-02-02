import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; 
import { UltilService } from '../ultil.service';
import { product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  activeRoute:any;
  constructor(
  	public cartService : CartService,
  	public ultilService : UltilService,
  	private route:ActivatedRoute,
  	private location:Location
  ) { }
  ngOnInit() { 
  }
  delete(){
    console.log('delete header');
    
  }
  // getPath(url){
  // 	this.activeRoute=this.route.isActive(url);
  // 	console.log(this.activeRoute);
  // }
}
