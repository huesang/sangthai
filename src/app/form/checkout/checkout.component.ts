import { Component, OnInit } from '@angular/core';
import { CartService } from "../../cart.service";
import { FormService } from "../form.service";
import { GetHttpService } from "./get-http.service";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService:CartService,public formService:FormService,private getHttp: GetHttpService) { 
    this.getHttp.getCity();
  }

  ngOnInit() {
  }

}
